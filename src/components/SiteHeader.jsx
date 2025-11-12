import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GlassSurface from '../../Reactbits/GlassSurface/GlassSurface'


export default function SiteHeader() {
  const [hidden, setHidden] = useState(false)
  const [pastHero, setPastHero] = useState(false) // >=200px scrolled
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
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

  // Lock scroll and normalize header visuals when mobile menu is open
  useEffect(() => {
    const root = document.documentElement
    const appMain = document.querySelector('.app-main')
    if (mobileOpen) {
      root.classList.add('menu-open')
      appMain?.classList.add('menu-open')
    } else {
      root.classList.remove('menu-open')
      appMain?.classList.remove('menu-open')
    }
    return () => {
      root.classList.remove('menu-open')
      appMain?.classList.remove('menu-open')
    }
  }, [mobileOpen])

  // Show header immediately on route change; reset pastHero if at top
  useEffect(() => {
    setHidden(false)
    setMobileOpen(false)
  setDropdownOpen(false)
    const scroller = document.querySelector('.app-main') || window
    const y = scroller === window ? (window.scrollY || window.pageYOffset) : scroller.scrollTop
    setPastHero(y >= 200)
  }, [pathname])

  // Close mobile menu when resizing above breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && mobileOpen) setMobileOpen(false)
  if (window.innerWidth > 900 && dropdownOpen) setDropdownOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileOpen])

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href') || ''
    if (!href.includes('#')) return
    const id = href.split('#')[1]
    if (!id) return
    const target = document.getElementById(id)
    if (!target) return
    e.preventDefault()
    setMobileOpen(false)
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
    <header className={`site-header ${hidden ? 'is-hidden' : ''} ${pastHero ? 'is-solid' : 'is-clear'} ${isHome ? 'is-absolute' : ''} ${mobileOpen ? 'is-menu-open' : ''}`} role="navigation" aria-label="Primary">
      <GlassSurface 
        displace={3}
        distortionScale={-130}
        redOffset={0}
        greenOffset={10}
        blueOffset={15}
        brightness={50}
        opacity={0.93}
        blur={11}
        mixBlendMode="multiply"
        borderWidth={0}
        backgroundOpacity={0.3}
      >
      </GlassSurface>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Home">Alice Ma</Link>
        <nav
          id="primary-nav"
          className={`header-nav ${mobileOpen ? 'is-open' : ''}`}
          onClick={(e) => {
            const a = e.target.closest('a')
            if (!a) return
            // If clicking the dropdown toggle on mobile, don't close the menu
            if (window.innerWidth <= 900) {
              const parent = a.parentElement
              if (parent && parent.classList.contains('has-dropdown')) return
            }
            setDropdownOpen(false)
            setMobileOpen(false)
          }}
        >
          <div className="nav-item has-dropdown">
            <a
              href="/#selected-work"
              onClick={(e) => {
                if (window.innerWidth <= 900) {
                  e.preventDefault()
                  setDropdownOpen(o => !o)
                } else {
                  handleNavClick(e)
                }
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen ? 'true' : 'false'}
              aria-controls="work-submenu"
            >
              Work <span className="material-icons-round caret" aria-hidden="true">expand_more</span>
            </a>
            <div id="work-submenu" className={`dropdown ${dropdownOpen ? 'is-open' : ''}`}>  
              <a href="/visionfusion" onClick={handleNavClick}>VisionFusion</a>
              <a href="/#other-work" onClick={handleNavClick}>Pegasystems</a>
              <a href="/#other-work" onClick={handleNavClick}>Seven Seas</a>
              <a href="/#other-work" onClick={handleNavClick}>Kiosk on Tour</a>
            </div>
          </div>
          <a href="/#other-work" onClick={handleNavClick}>About</a>
          <a href="/#other-work" onClick={handleNavClick}>Resume</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
        {/* Mobile menu toggle moved to the right side */}
        <button
          className={`menu-toggle ${mobileOpen ? 'is-open' : ''}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-controls="primary-nav"
          aria-expanded={mobileOpen ? 'true' : 'false'}
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>
    </header>
  )
}
