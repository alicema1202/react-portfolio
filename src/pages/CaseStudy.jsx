import React, { use, useEffect, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { selectWork, otherWork } from '../data/work'
import Carousel from '../components/Carousel'
import InfoCards from '../components/InfoCards'
import QuoteBlock from '../components/QuoteBlock'
import SiteFooter from '../components/SiteFooter'
import CaseAside from '../components/CaseAside'
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
  

  if (!item) {
    useEffect(() => {
      navigate("/404", { replace: true })
    }, [])
    return null
  }

  const sectionIds = (item?.sections?.map(s => s.id) || [])

  

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
          <CaseAside
            sections={item.sections || []}
            onBack={handleBack}
            ariaLabel="Case study navigation"
            watchKey={id}
          />

          <article className="cs-content">
            {item.sections?.map(sec => (
              <section id={sec.id} key={sec.id}>
                {sec.headline ? (
                  <>
                    <p className="cs-section-label" aria-label="Section category">{sec.title.toUpperCase()}</p>
                    <h2 className="cs-section-headline">{sec.headline}</h2>
                    <hr className="section-separator" />
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
                    case 'subheading':
                      return (
                        <h3 key={i} className="cs-subheading">{block.text}</h3>
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
