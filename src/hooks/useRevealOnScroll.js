import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * useRevealOnScroll
 * Adds reveal-on-scroll classes to common content elements and observes them
 * until they enter the viewport. Excludes footer content.
 * Honors prefers-reduced-motion.
 */
export default function useRevealOnScroll() {
  const { pathname } = useLocation()
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const scroller = document.querySelector('.app-main') || null
    const root = document.querySelector('.app-main') || document

    const selector = [
      'h1','h2','h3','h4','p','li','figure','section','article',
      '.button','.work-card','.info-card','.carousel','.hero .message','hr','img','.meta-item',
      // Video player card + key inner elements to ensure visible reveal
      '.video-player-card',
      '.video-player-card .vpc-video-wrapper',
      '.video-player-card .glass-surface',
      // Ensure thumbnails in work cards reveal as well
      '.work-card .thumb', '.work-card .thumb img', '.work-card .thumb-video',
      '.cs-content'
    ].join(',')

    const applyStagger = (els) => {
      const groups = new Map()
      els.forEach(el => {
        const parent = el.closest('.container, .cs-content, main, .work-grid') || el.parentElement
        if (!groups.has(parent)) groups.set(parent, [])
        groups.get(parent).push(el)
      })
      groups.forEach(list => {
        list.forEach((el, i) => { el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 60}ms`) })
      })
    }

  const ioDefault = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          ioDefault.unobserve(entry.target)
        }
      })
  }, { root: scroller, threshold: 0, rootMargin: '0px 0px 20% 0px' })

    // Use a near-zero threshold for very tall containers like .cs-content so they trigger
  const ioContainer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          ioContainer.unobserve(entry.target)
        }
      })
  }, { root: scroller, threshold: 0, rootMargin: '0px 0px 25% 0px' })

    const init = () => {
      const candidates = root.querySelectorAll(selector)
      const elements = Array.from(candidates).filter(el => !el.closest('.site-footer'))
      const prepared = []
      elements.forEach(el => {
        if (el.classList.contains('reveal-visible') || el.classList.contains('no-reveal')) return
        if (!el.classList.contains('reveal-up')) {
          el.classList.add('reveal-up')
          prepared.push(el)
        }
        ;(el.matches('.cs-content') ? ioContainer : ioDefault).observe(el)
      })
      if (prepared.length) {
        applyStagger(prepared)
        // If some elements are already in view at load, add visible on next frame
        // to ensure the initial translateY/opacity state paints first.
        const scrollerRect = scroller ? scroller.getBoundingClientRect() : { top: 0, bottom: window.innerHeight }
        requestAnimationFrame(() => {
          prepared.forEach(el => {
            const r = el.getBoundingClientRect()
            const inView = r.bottom > scrollerRect.top && r.top < scrollerRect.bottom
            if (inView) {
              el.classList.add('reveal-visible')
              ;(el.matches('.cs-content') ? ioContainer : ioDefault).unobserve(el)
            }
          })
        })
      }
    }

    init()

    // Observe late DOM additions (e.g., route content, images/components)
    const mo = new MutationObserver((mutations) => {
      let added = []
      mutations.forEach(m => {
        m.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return
          if (node.matches(selector) && !node.closest('.site-footer')) added.push(node)
          node.querySelectorAll && node.querySelectorAll(selector).forEach(child => {
            if (!child.closest('.site-footer')) added.push(child)
          })
        })
      })
      if (added.length) {
        const unique = Array.from(new Set(added))
        const prepared = []
        unique.forEach(el => {
          if (el.classList.contains('reveal-visible') || el.classList.contains('no-reveal')) return
          if (!el.classList.contains('reveal-up')) {
            el.classList.add('reveal-up')
            prepared.push(el)
          }
          ;(el.matches('.cs-content') ? ioContainer : ioDefault).observe(el)
        })
        if (prepared.length) applyStagger(prepared)
      }
    })

    mo.observe(root, { childList: true, subtree: true })

  return () => { ioDefault.disconnect(); ioContainer.disconnect(); mo.disconnect() }
  }, [pathname])
}
