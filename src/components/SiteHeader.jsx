import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const [pastHero, setPastHero] = useState(false) // >=200px scrolled
  const lastY = useRef(0)
  const ticking = useRef(false)
  const scrollerRef = useRef(null)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    // Find the app-main scroll container
    scrollerRef.current = document.querySelector('.app-main') || window

    const onScroll = () => {
      const y = scrollerRef.current === window ? (window.scrollY || window.pageYOffset) : scrollerRef.current.scrollTop
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const goingDown = y > lastY.current
          const nearTop = y < 10
          if (nearTop) setHidden(false)
          else if (goingDown && y > 200) setHidden(true)
          else setHidden(false)
          setPastHero(y >= 200)
          lastY.current = y
          ticking.current = false
        })
        ticking.current = true
      }
    }

    const target = scrollerRef.current
    target.addEventListener('scroll', onScroll, { passive: true })
    return () => target.removeEventListener('scroll', onScroll)
  }, [])

  // Show header immediately on route change; reset pastHero if at top
  useEffect(() => {
    setHidden(false)
    const scroller = document.querySelector('.app-main') || window
    const y = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
    setPastHero(y >= 200)
  }, [pathname])

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href') || ''
    if (!href.includes('#')) return
    const id = href.split('#')[1]
    if (!id) return
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    const scroller = document.querySelector('.app-main') || window
    const headerPad = 72
    const baseTop = scroller === window ? 0 : scroller.getBoundingClientRect().top
    const yNow = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
    const yTarget = target.getBoundingClientRect().top - baseTop + yNow - headerPad
    if (scroller === window) window.scrollTo({ top: yTarget, behavior: 'smooth' })
    else scroller.scrollTo({ top: yTarget, behavior: 'smooth' })
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <header className={`site-header ${hidden ? 'is-hidden' : ''} ${pastHero ? 'is-solid' : 'is-clear'} ${isHome ? 'is-absolute' : ''}`} role="navigation" aria-label="Primary">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Home">UX Portfolio</Link>
        <nav className="header-nav">
          <div className="nav-item has-dropdown">
            <a href="/#selected-work" onClick={handleNavClick} aria-haspopup="true">
              Work <span className="caret">▾</span>
            </a>
            <div className="dropdown">
              <a href="/#selected-work" onClick={handleNavClick}>Selected work</a>
              <a href="/#other-work" onClick={handleNavClick}>Other work</a>
            </div>
          </div>
          <a href="/#other-work" onClick={handleNavClick}>About</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
      </div>
    </header>
  )
}
