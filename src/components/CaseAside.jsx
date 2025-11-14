import React, { useEffect, useMemo, useRef, useState } from 'react'

export default function CaseAside({
  sections = [],
  activeId: controlledActiveId,
  onActiveChange,
  onAnchorClick,
  onBack,
  ariaLabel = 'Section navigation',
  scrollerSelector = '.app-main',
  contentSelector = '.case-study .cs-content',
  headerOffset = 80,
  biasUpOffset = 100,
  offsetPadding = 87,
  minActiveHeight = 280,
  watchKey = null,
}) {
  const asideRef = useRef(null)
  const scrollerRef = useRef(null)
  const positionsRef = useRef([])
  const lastScrollYRef = useRef(0)
  const scrollingUpRef = useRef(false)
  const contentStartRef = useRef(0)
  const [internalActive, setInternalActive] = useState(sections[0]?.id || '')
  const ids = useMemo(() => sections.map(s => s.id).filter(Boolean), [sections])

  const setActive = (id) => {
    if (!id) return
    if (controlledActiveId == null) setInternalActive(id)
    if (onActiveChange) onActiveChange(id)
  }

  const computePositions = () => {
    const scroller = scrollerRef.current || document.querySelector(scrollerSelector) || window
    const scrollTop = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
    const baseTop = scroller === window ? 0 : scroller.getBoundingClientRect().top
    positionsRef.current = ids
      .map(id => {
        const el = document.getElementById(id)
        if (!el) return null
        const rect = el.getBoundingClientRect()
        const topAbs = rect.top - baseTop + scrollTop
        const bottomAbs = rect.bottom - baseTop + scrollTop
        return { id, top: topAbs, bottom: bottomAbs, height: rect.height }
      })
      .filter(Boolean)
  }

  const computeContentStart = () => {
    const sc = scrollerRef.current || document.querySelector(scrollerSelector) || window
    const baseTop = sc === window ? 0 : sc.getBoundingClientRect().top
    const scrollTop = sc === window ? (window.scrollY || window.pageYOffset) : sc.scrollTop
    const content = document.querySelector(contentSelector)
    if (content) {
      const rect = content.getBoundingClientRect()
      contentStartRef.current = rect.top - baseTop + scrollTop
    } else {
      contentStartRef.current = 0
    }
  }

  useEffect(() => {
    scrollerRef.current = document.querySelector(scrollerSelector) || window
    const scroller = scrollerRef.current
    computePositions()
    computeContentStart()

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const list = positionsRef.current
          if (!list.length) { ticking = false; return }
          const y = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
          const prevY = lastScrollYRef.current
          const goingUp = y < prevY
          if (goingUp !== scrollingUpRef.current) {
            scrollingUpRef.current = goingUp
            const asideEl = asideRef.current
            if (asideEl) {
              if (goingUp) {
                asideEl.classList.add('scrolling-up')
                asideEl.style.setProperty('--aside-offset', `${offsetPadding}px`)
              } else {
                asideEl.classList.remove('scrolling-up')
                asideEl.style.setProperty('--aside-offset', '0px')
              }
            }
          }
          // Near top: force no offset
          const startY = Math.max(0, contentStartRef.current - 10)
          if (y <= startY) {
            const asideEl = asideRef.current
            if (asideEl) {
              asideEl.classList.remove('scrolling-up')
              asideEl.style.setProperty('--aside-offset', '0px')
            }
          }
          // Section activation
          const viewportH = scroller === window ? window.innerHeight : scroller.clientHeight
          const activationBias = scrollingUpRef.current ? biasUpOffset : 0
          const anchorY = y + headerOffset + 8 + activationBias
          let current = null
          // Prefer containment: anchor within [sec.top, activeEnd)
          for (let i = 0; i < list.length; i++) {
            const sec = list[i]
            const nextTop = i < list.length - 1 ? list[i + 1].top : Number.POSITIVE_INFINITY
            const paddedEnd = sec.top + Math.max(sec.height || 0, minActiveHeight)
            const activeEnd = Math.min(nextTop - 1, paddedEnd)
            if (anchorY >= sec.top && anchorY < activeEnd) { current = sec; break }
          }
          // Fallback: choose the last section whose top <= anchor
          if (!current) {
            current = list[0]
            for (let i = 0; i < list.length; i++) {
              const sec = list[i]
              if (sec.top <= anchorY) current = sec
              else break
            }
          }
          const last = list[list.length - 1]
          // Near bottom: force last section active only if anchor is within/past last section
          if (y + viewportH >= last.bottom - 1) {
            const anchorWithinLast = anchorY >= last.top - 4
            if (anchorWithinLast) current = last
          }
          if (current?.id) setActive(current.id)
          lastScrollYRef.current = y
          ticking = false
        })
        ticking = true
      }
    }

    const onResize = () => { computePositions(); computeContentStart(); onScroll() }
    scroller.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('load', onResize)
    window.addEventListener('orientationchange', onResize)
    onResize()
    if (ids[0]) setActive(ids[0])
    lastScrollYRef.current = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', onResize)
      window.removeEventListener('orientationchange', onResize)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollerSelector, contentSelector, headerOffset, biasUpOffset, offsetPadding, minActiveHeight, JSON.stringify(ids)])

  // Recompute on external watch key (e.g., route change)
  useEffect(() => {
    computePositions()
    computeContentStart()
  }, [watchKey])

  const internalAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    const target = document.querySelector(href)
    const scroller = scrollerRef.current || document.querySelector(scrollerSelector) || window
    if (target) {
      e.preventDefault()
      const baseTop = scroller === window ? 0 : scroller.getBoundingClientRect().top
      const yNow = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
      const targetTopAbs = target.getBoundingClientRect().top - baseTop + yNow
      const isUp = targetTopAbs < yNow
      const offset = isUp ? biasUpOffset : 0
      const yTarget = Math.max(0, targetTopAbs - offset)
      if (scroller === window) window.scrollTo({ top: yTarget, behavior: 'smooth' })
      else scroller.scrollTo({ top: yTarget, behavior: 'smooth' })
      history.replaceState(null, '', href)
  // Optimistically set active to the target section for immediate feedback
  const id = href.slice(1)
  if (id) setActive(id)
    }
  }
  return (
  <aside className="case-aside" aria-label={ariaLabel} ref={asideRef}>
      <nav className="toc">
        {onBack ? (
          <button
            type="button"
            className="toc-back"
            onClick={onBack}
            aria-label="Back"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.4rem',
              background: 'none',
              border: 0,
            }}
          >
            <span className="material-icons-round" aria-hidden="true">chevron_left</span>
            <span>Back</span>
          </button>
        ) : null}
        <ul>
      {sections.map(sec => (
            <li key={sec.id}>
              <a
        className={(controlledActiveId ?? internalActive)===sec.id ? 'active' : ''}
        onClick={onAnchorClick || internalAnchorClick}
                href={`#${sec.id}`}
              >
                {sec.id}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
