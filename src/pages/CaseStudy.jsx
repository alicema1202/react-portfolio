import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { selectWork, otherWork } from '../data/work'
import Carousel from '../components/Carousel'
import InfoCards from '../components/InfoCards'
import QuoteBlock from '../components/QuoteBlock'
import SiteFooter from '../components/SiteFooter'
import GradualBlur from '../../Reactbits/GradualBlur/GradualBlur'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import { getProjectTheme } from '../data/projectThemes'
import { getProjectMeta } from '../data/projectMeta'


export default function CaseStudy() {
  const { id } = useParams()
  const navigate = useNavigate()
  // Initialize reveal-on-scroll for case study content
  useRevealOnScroll()
  const all = [...selectWork, ...otherWork]
  const item = all.find(i => i.id === id)
  // Resolve theme per project id
  const theme = useMemo(() => getProjectTheme(id) || null, [id])
  const meta = useMemo(() => getProjectMeta(id) || null, [id])
  const [activeId, setActiveId] = useState('')
  const lockRef = useRef(false)
  const positionsRef = useRef([])
  const scrollerRef = useRef(null)
  const lastScrollYRef = useRef(0)
  const scrollingUpRef = useRef(false)
  const contentStartRef = useRef(0)

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

    const computeContentStart = () => {
      const sc = scrollerRef.current || document.querySelector('.app-main') || window
      const baseTop = sc === window ? 0 : sc.getBoundingClientRect().top
      const scrollTop = sc === window ? (window.scrollY || window.pageYOffset) : sc.scrollTop
      const content = document.querySelector('.case-study .cs-content')
      if (content) {
        const rect = content.getBoundingClientRect()
        contentStartRef.current = rect.top - baseTop + scrollTop
      } else {
        contentStartRef.current = 0
      }
    }
    computeContentStart()

    const headerOffset = 80 // px offset for sticky elements
    let ticking = false

    const onScroll = () => {
      if (lockRef.current) return
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const list = positionsRef.current
          if (!list.length) { ticking = false; return }
          const y = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
          // Detect scroll direction
          const prevY = lastScrollYRef.current
          const goingUp = y < prevY
          if (goingUp !== scrollingUpRef.current) {
            scrollingUpRef.current = goingUp
            // Toggle class on aside to translate when scrolling up
            const asideEl = document.querySelector('.case-study .case-aside')
            if (asideEl) {
              if (goingUp) asideEl.classList.add('scrolling-up')
              else asideEl.classList.remove('scrolling-up')
            }
          }
          // If we've reached or crossed the content start, remove translation to avoid top padding
          const startY = Math.max(0, contentStartRef.current - 10) // small epsilon
          if (y <= startY) {
            const asideEl = document.querySelector('.case-study .case-aside')
            if (asideEl) asideEl.classList.remove('scrolling-up')
          }
          // Activate the section whose top is nearest to the top (past the header offset)
          const viewportH = scroller === window ? window.innerHeight : scroller.clientHeight
          // Apply an extra activation bias when scrolling UP to account for the 100px scroll offset
          const activationBias = scrollingUpRef.current ? 100 : 0
          const nearTop = y + headerOffset + 8 + activationBias
          let current = list[0]
          for (let i = 0; i < list.length; i++) {
            const sec = list[i]
            if (sec.top <= nearTop) current = sec
            else break
          }
          // If scrolled to the bottom, ensure last section is active
          const last = list[list.length - 1]
          if (y + viewportH >= last.bottom - 1) current = last
          if (current?.id) setActiveId(current.id)
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
  // Initialize scroll direction baseline
  lastScrollYRef.current = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
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
      const baseTop = scroller === window ? 0 : scroller.getBoundingClientRect().top
      const yNow = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
  // Compute absolute target top and apply offset only when scrolling up
  const targetTopAbs = target.getBoundingClientRect().top - baseTop + yNow
  const isScrollingUp = targetTopAbs < yNow
  const offset = isScrollingUp ? 100 : 0
  const yTarget = Math.max(0, targetTopAbs - offset)
      if (scroller === window) window.scrollTo({ top: yTarget, behavior: 'smooth' })
      else scroller.scrollTo({ top: yTarget, behavior: 'smooth' })
      history.replaceState(null, '', href)
    }
  }

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
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
  const t = window.setTimeout(() => { computePositions(); computeContentStart() }, 400)
  return () => window.clearTimeout(t)
  }, [id, item?.sections])

  return (
    <main className="case-study" style={{ ...(theme ? { ['--project-brand']: theme.brand, ['--project-accent']: theme.accent } : {}) }}>
      <section className="cs-hero" style={{ marginBottom: '1.5rem' }}>
          {/* Gradient wrapper spanning all rows */}
          <div
            className="cs-hero-bg"
            style={{
              background: 'linear-gradient(307deg,var(--project-accent, var(--brand-accent)) 6.14%, var(--project-brand, var(--brand))) 98.68%',
              ...(theme ? { ['--project-brand']: theme.brand, ['--project-accent']: theme.accent } : {}),
              borderRadius: '12px',
              // top and side padding, with extra bottom to make room for the pinned button
              padding: '36px 20px 64px',
            }}
          >
            {/* Row 1: Logo */}
            <div
              className="cs-hero-row logo">
              {meta?.logo ? (
                <img src={meta.logo} alt="Project logo" style={{ maxHeight: 56, maxWidth: '70%', objectFit: 'contain' }} />
              ) : (
                <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>{item.initials || item.title}</span>
              )}
            </div>

            {/* Row 2: Project image */}
            <img className="cs-hero-image"
              src={meta.heroImage}
              alt="Project image"
            />
                

            {/* Row 3: Description with purpose, role, duration */}
            <div className="cs-hero-row meta">
              <div style={{ display: 'flex', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px',justifyContent: 'center' }}>
                <div className="meta-item">
                  <div style={{textTransform: 'uppercase'}}>Purpose</div>
                  <div>{meta?.purpose || '—'}</div>
                </div>
                <div className="meta-item">
                  <div style={{ textTransform: 'uppercase'}}>Role</div>
                  <div>{meta?.role || '—'}</div>
                </div>
                <div className="meta-item">
                  <div style={{textTransform: 'uppercase'}}>Duration</div>
                  <div style={{width: meta?.durationWidth}}>{meta?.duration || '—'}</div>
                </div>
              </div>
            </div>

            {/* Bottom-pinned Read more button */}
            <a
              href={`#${sectionIds[0]}`}
              onClick={handleAnchorClick}
              className="button cs-hero-readmore"
              aria-label="Read more"
            >
              Read more
              <span className="material-icons-round caret" aria-hidden="true">expand_more</span>
            </a>
          </div>
        </section>
      <div className="container">
        {/* <p><Link to="/">← Back to home</Link></p> */}
        {/* <header style={{ marginBottom: '1.5rem' }}> */}
          {/* <h1 style={{ margin: '0 0 .5rem' }}>{item.title}</h1>
          <p className="summary" style={{ margin: 0 }}>{item.summary}</p>
          {item.tags?.length ? (
            <ul className="tags" style={{ marginTop: '.75rem' }}>
              {item.tags.map(t => <li key={t}>{t}</li>)}
            </ul>
          ) : null} */}
        {/* </header> */}

        

        <div className="case-layout">
          <aside className="case-aside" aria-label="Case study navigation">
            <nav className="toc">
              <button
                type="button"
                className="toc-back"
                onClick={handleBack}
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
              <ul>
                {item.sections?.map(sec => (
                  <li key={sec.id}>
                    <a className={activeId===sec.id ? 'active' : ''} onClick={handleAnchorClick} href={`#${sec.id}`}>{sec.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="cs-content">
            {item.sections?.map(sec => (
              <section id={sec.id} key={sec.id}>
                {sec.headline ? (
                  <>
                    <p className="cs-section-label" aria-label="Section category">{sec.title.toUpperCase()}</p>
                    <h2 className="cs-section-headline">{sec.headline}</h2>
                    <hr className="cs-section-separator" />
                  </>
                ) : (
                  <h2>{sec.title}</h2>
                )}
                {Array.isArray(sec.body) ? sec.body.map((block, i) => {
                  if (typeof block === 'string') return (<p key={i}>{block}</p>)
                  if (!block || typeof block !== 'object') return null
                  switch (block.type) {
                    case 'image':
                      return (
                        <figure key={i}>
                          <img src={block.src} alt={block.alt || ''} />
                          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
                        </figure>
                      )
                    case 'video':
                      return (
                        <figure key={i}>
                          <video
                            src={block.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
                          />
                          {block.alt ? <figcaption>{block.alt}</figcaption> : null}
                        </figure>
                      )
                    case 'carousel':
                      return (<Carousel key={i} images={block.images || []} alt={block.alt || ''} />)
                    case 'cards':
                      return (<InfoCards key={i} items={block.items || []} />)
                    case 'quote':
                      return (<QuoteBlock key={i} text={block.text} cite={block.cite} />)
                    case 'list':
                      return (
                        <ul key={i}>
                          {(block.items || []).map((text, idx) => (
                            <li key={idx}>{text}</li>
                          ))}
                        </ul>
                      )
                    default:
                      return null
                  }
                }) : (<p>{sec.body}</p>)}
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
      <GradualBlur
        target="parent"
        position="bottom"
        height="4rem"
        strength={1}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
      <SiteFooter />
    </main>
  )
}
