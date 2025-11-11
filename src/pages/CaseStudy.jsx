import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { selectWork, otherWork } from '../data/work'

export default function CaseStudy() {
  const { id } = useParams()
  const all = [...selectWork, ...otherWork]
  const item = all.find(i => i.id === id)
  const [activeId, setActiveId] = useState('')
  const lockRef = useRef(false)
  const positionsRef = useRef([])
  const scrollerRef = useRef(null)

  if (!item) {
    return (
      <main className="container" style={{ padding: '3rem 0' }}>
        <h1>Case study not found</h1>
        <p>The requested case study doesn’t exist.</p>
        <p><Link to="/">Back to home</Link></p>
      </main>
    )
  }

  const sectionIds = (item?.sections?.map(s => s.id) || [])

  const computePositions = () => {
    const scroller = scrollerRef.current || document.querySelector('.app-main') || window
    const scrollTop = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
    const baseTop = scroller === window ? 0 : scroller.getBoundingClientRect().top

    positionsRef.current = sectionIds
      .map(id => {
        const el = document.getElementById(id)
        if (!el) return null
        const rect = el.getBoundingClientRect()
        const topAbs = rect.top - baseTop + scrollTop
        const bottomAbs = rect.bottom - baseTop + scrollTop
        return {
          id,
          top: topAbs,
          bottom: bottomAbs,
          height: rect.height,
        }
      })
      .filter(Boolean)
  }

  useEffect(() => {
    scrollerRef.current = document.querySelector('.app-main') || window
    const scroller = scrollerRef.current

    computePositions()

    const headerOffset = 80 // px offset for sticky elements
    let ticking = false

    const onScroll = () => {
      if (lockRef.current) return
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const list = positionsRef.current
          if (!list.length) { ticking = false; return }
          const y = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
          const viewportCenter = y + headerOffset + ((scroller === window ? window.innerHeight : scroller.clientHeight) - headerOffset) / 2
          let best = list[0]
          let bestDist = Number.POSITIVE_INFINITY
          for (let i = 0; i < list.length; i++) {
            const sec = list[i]
            const center = (sec.top + sec.bottom) / 2
            const dist = Math.abs(center - viewportCenter)
            if (dist < bestDist) { best = sec; bestDist = dist }
          }
          if (best?.id) setActiveId(best.id)
          ticking = false
        })
        ticking = true
      }
    }

    const onResize = () => { computePositions(); onScroll() }
    scroller.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('load', onResize)
    window.addEventListener('orientationchange', onResize)
    const onHash = () => {
      const idFromHash = window.location.hash.replace('#','')
      if (sectionIds.includes(idFromHash)) {
        lockRef.current = true
        setActiveId(idFromHash)
        window.setTimeout(() => { lockRef.current = false }, 400)
      }
    }
    window.addEventListener('hashchange', onHash)

    // Initial set
    onResize()
    const initialHash = window.location.hash.replace('#','')
    if (sectionIds.includes(initialHash)) setActiveId(initialHash)
    else if (sectionIds[0]) setActiveId(sectionIds[0])
    return () => {
      scroller.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', onResize)
      window.removeEventListener('orientationchange', onResize)
      window.removeEventListener('hashchange', onHash)
    }
  }, [id])

  const handleAnchorClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (!href?.startsWith('#')) return
    const target = document.querySelector(href)
    const scroller = scrollerRef.current || document.querySelector('.app-main') || window
    if (target) {
      e.preventDefault()
      lockRef.current = true
      setActiveId(href.slice(1))
      const headerPad = 72
      const baseTop = scroller === window ? 0 : scroller.getBoundingClientRect().top
      const yNow = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
      const yTarget = target.getBoundingClientRect().top - baseTop + yNow - headerPad
      if (scroller === window) window.scrollTo({ top: yTarget, behavior: 'smooth' })
      else scroller.scrollTo({ top: yTarget, behavior: 'smooth' })
      history.replaceState(null, '', href)
      window.setTimeout(() => { lockRef.current = false }, 700)
    }
  }

  // Recompute positions after images inside sections load (affects heights/positions)
  useEffect(() => {
    const imgs = document.querySelectorAll('.cs-content img')
    if (!imgs.length) return
    let pending = imgs.length
    const done = () => {
      pending -= 1
      if (pending === 0) computePositions()
    }
    imgs.forEach(img => {
      if (img.complete) done()
      else img.addEventListener('load', done, { once: true })
      img.addEventListener('error', done, { once: true })
    })
    const t = window.setTimeout(() => computePositions(), 400)
    return () => window.clearTimeout(t)
  }, [id, item?.sections])

  return (
    <main className="case-study">
      <div className="container" style={{ padding: '2.5rem 0' }}>
        <p><Link to="/">← Back to home</Link></p>
        <header style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ margin: '0 0 .5rem' }}>{item.title}</h1>
          <p className="summary" style={{ margin: 0 }}>{item.summary}</p>
          {item.tags?.length ? (
            <ul className="tags" style={{ marginTop: '.75rem' }}>
              {item.tags.map(t => <li key={t}>{t}</li>)}
            </ul>
          ) : null}
        </header>

        <section className="cs-hero" style={{ marginBottom: '1.5rem' }}>
          <div className="thumb" style={{ aspectRatio: '16/9', background: 'linear-gradient(135deg,var(--brand), var(--brand-accent))', borderRadius: '12px', display: 'grid', placeItems: 'center', color: '#fff', fontSize: '3rem', fontWeight: 700 }}>
            {item.image ? <img src={item.image} alt="" /> : item.initials}
          </div>
        </section>

        <div className="case-layout">
          <aside className="case-aside" aria-label="On this page">
            <nav className="toc">
              <h2 className="toc-title">On this page</h2>
              <ul>
                {item.sections?.map(sec => (
                  <li key={sec.id}>
                    <a className={activeId===sec.id ? 'active' : ''} onClick={handleAnchorClick} href={`#${sec.id}`}>{sec.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="cs-content" style={{ maxWidth: '80ch' }}>
            {item.sections?.map(sec => (
              <section id={sec.id} key={sec.id}>
                <h2>{sec.title}</h2>
                {Array.isArray(sec.body) ? sec.body.map((p, i) => (<p key={i}>{p}</p>)) : (<p>{sec.body}</p>)}
                {sec.images?.length ? (
                  <div className="cs-figures">
                    {sec.images.map((src, i) => (
                      <figure key={i}>
                        <img src={src} alt="" />
                      </figure>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </div>
    </main>
  )
}
