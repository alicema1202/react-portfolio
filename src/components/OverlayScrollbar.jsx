import React, { useEffect, useRef, useState } from 'react'

export default function OverlayScrollbar({ targetSelector = '.app-main', rightOffsetVar = '--dock-offset', watchKey = null }) {
  const trackRef = useRef(null)
  const thumbRef = useRef(null)
  const scrollerRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const isScrollingRef = useRef(false)
  const initialRevealRef = useRef(true)
  const scrollHideTimerRef = useRef(null)
  const initialRevealTimerRef = useRef(null)
  const draggingRef = useRef(false)
  const dragStartYRef = useRef(0)
  const dragStartScrollRef = useRef(0)

  const computeMetrics = () => {
    const sc = scrollerRef.current
    if (!sc) return { viewport: 0, content: 0, scrollTop: 0 }
    return { viewport: sc.clientHeight, content: sc.scrollHeight, scrollTop: sc.scrollTop }
  }

  const applyLayout = () => {
    const sc = scrollerRef.current
    const { viewport, content, scrollTop } = computeMetrics()
    const hasOverflow = content > viewport + 1
    const active = hasOverflow && (isScrollingRef.current || initialRevealRef.current)
    if (visible !== active) setVisible(active)
    if (!hasOverflow) return
    const track = trackRef.current
    const thumb = thumbRef.current
    if (!track || !thumb) return
    const trackRect = track.getBoundingClientRect()
    const trackH = trackRect.height
    const ratio = viewport / content
    const thumbH = Math.max(28, Math.floor(trackH * ratio))
    const maxThumbTop = trackH - thumbH
    const scrollRatio = scrollTop / (content - viewport)
    const thumbTop = Math.min(maxThumbTop, Math.max(0, Math.floor(scrollRatio * maxThumbTop)))
    thumb.style.height = thumbH + 'px'
    thumb.style.transform = `translateY(${thumbTop}px)`
  }

  useEffect(() => {
    const sc = document.querySelector(targetSelector) || window
    scrollerRef.current = sc

    const onScroll = () => {
      // rAF to avoid layout thrash
      if (!trackRef.current) return
      // Show during scroll
      isScrollingRef.current = true
    //   if (scrollHideTimerRef.current) clearTimeout(scrollHideTimerRef.current)
    //   scrollHideTimerRef.current = setTimeout(() => {
    //     isScrollingRef.current = false
    //     requestAnimationFrame(applyLayout)
    //   }, 650)
      requestAnimationFrame(applyLayout)
    }

    const onResize = () => requestAnimationFrame(applyLayout)

    sc.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)

    let ro
    if ('ResizeObserver' in window && sc instanceof Element) {
      ro = new ResizeObserver(() => applyLayout())
      ro.observe(sc)
    }

    // Initial layout + brief reveal
    initialRevealRef.current = true
    if (initialRevealTimerRef.current) clearTimeout(initialRevealTimerRef.current)
    initialRevealTimerRef.current = setTimeout(() => {
      initialRevealRef.current = false
      requestAnimationFrame(applyLayout)
    }, 900)
    applyLayout()

    return () => {
      sc.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
      if (ro) ro.disconnect()
      if (scrollHideTimerRef.current) clearTimeout(scrollHideTimerRef.current)
      if (initialRevealTimerRef.current) clearTimeout(initialRevealTimerRef.current)
    }
  }, [targetSelector])

  // Recompute on external key changes (e.g., route pathname)
  useEffect(() => {
    // Briefly reveal on route changes too
    initialRevealRef.current = true
    if (initialRevealTimerRef.current) clearTimeout(initialRevealTimerRef.current)
    const id = requestAnimationFrame(() => {
      applyLayout()
      initialRevealTimerRef.current = setTimeout(() => {
        initialRevealRef.current = false
        requestAnimationFrame(applyLayout)
      }, 900)
    })
    return () => cancelAnimationFrame(id)
  }, [watchKey])

  // Observe content mutations to update track/thumb when content length changes
  useEffect(() => {
    const sc = scrollerRef.current
    if (!(sc instanceof Element)) return
    let mo
    try {
      mo = new MutationObserver(() => requestAnimationFrame(applyLayout))
      mo.observe(sc, { childList: true, subtree: true })
    } catch (_) {}
    return () => { if (mo) mo.disconnect() }
  }, [scrollerRef.current])

  // Drag to scroll
  useEffect(() => {
    const track = trackRef.current
    const thumb = thumbRef.current
    const sc = scrollerRef.current
    if (!track || !thumb || !sc) return

    const onPointerDown = (e) => {
      draggingRef.current = true
      dragStartYRef.current = e.clientY
      dragStartScrollRef.current = sc.scrollTop
      document.body.style.userSelect = 'none'
      document.addEventListener('pointermove', onPointerMove)
      document.addEventListener('pointerup', onPointerUp, { once: true })
    }

    const onPointerMove = (e) => {
      if (!draggingRef.current) return
      const { viewport, content } = computeMetrics()
      const trackRect = track.getBoundingClientRect()
      const trackH = trackRect.height
      const thumbH = thumb.offsetHeight
      const maxThumbTop = Math.max(1, trackH - thumbH)
      const deltaY = e.clientY - dragStartYRef.current
      const scrollPerPx = (content - viewport) / maxThumbTop
      sc.scrollTop = dragStartScrollRef.current + deltaY * scrollPerPx
    }

    const onPointerUp = () => {
      draggingRef.current = false
      document.body.style.userSelect = ''
      document.removeEventListener('pointermove', onPointerMove)
    }

    const onTrackClick = (e) => {
      if (e.target === thumb) return
      const { viewport, content } = computeMetrics()
      const trackRect = track.getBoundingClientRect()
      const clickY = e.clientY - trackRect.top
      const ratio = clickY / trackRect.height
      sc.scrollTop = (content - viewport) * ratio
    }

    thumb.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointerdown', onTrackClick)

    return () => {
      thumb.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointerdown', onTrackClick)
      document.removeEventListener('pointermove', onPointerMove)
    }
  }, [visible])

  return (
    <div
        className="overlay-scrollbar"
        ref={trackRef}
        style={{
        position: 'fixed',
        right: '5px',
        top: '8px',
        bottom: '8px',
        width: '6px',
        borderRadius: '999px',
        background: 'transparent',
        zIndex: 155,
        pointerEvents: visible ? 'auto' : 'none',
        opacity: visible ? 1 : 0,
        transition: 'opacity 120ms ease, right 200ms ease',
      }}
      aria-hidden
    >
      <div
        ref={thumbRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '40px',
          borderRadius: '999px',
          background: 'rgba(255,255,255,0.35)',
          boxShadow: '0 1px 2px rgba(0,0,0,.25)',
          border: '1px solid rgba(0,0,0,0.2)',
        //   cursor: 'grab',
        }}
      />
    </div>
  )
}
