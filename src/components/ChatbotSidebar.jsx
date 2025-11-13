import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
// Import raw HTML so we can embed it into an iframe srcDoc
import chatbotHtml from '../../includes/chatbot.html?raw'

export default function ChatbotSidebar() {
  const [open, setOpen] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [isWide, setIsWide] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return true
    return window.matchMedia('(min-width: 700px)').matches
  })
  const panelRef = useRef(null)
  const closeBtnRef = useRef(null)
  const iframeRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (open) {
      // Move focus into the panel when opened
      closeBtnRef.current?.focus()
    }
  }, [open])

  // Expose chat-open state to CSS for cross-component tweaks (e.g., header behavior)
  useEffect(() => {
    const root = document.documentElement
    if (open) root.classList.add('chat-open')
    else root.classList.remove('chat-open')
    return () => root.classList.remove('chat-open')
  }, [open])

  // Track viewport width: disable FAB and force-close chat below 700px
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 700px)')
    const apply = () => setIsWide(!!mq.matches)
    apply()
    const handler = (e) => setIsWide(!!e.matches)
    if (mq.addEventListener) mq.addEventListener('change', handler)
    else if (mq.addListener) mq.addListener(handler) // Safari fallback
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler)
      else if (mq.removeListener) mq.removeListener(handler)
    }
  }, [])

  // Auto-close if width drops below threshold
  useEffect(() => {
    if (!isWide && open) setOpen(false)
  }, [isWide, open])

  // Update CSS variable for dock offset in desktop layout
  useEffect(() => {
    const root = document.documentElement
    const computeWidth = () => {
      const vw = window.innerWidth
      let w = 0
      if (open) {
        // Smaller drawer on small screens so it doesn't over-push content
        if (vw <= 980) w = Math.min(360, Math.floor(vw * 0.7))
        else w = Math.min(420, Math.floor(vw * 0.38))
      }
      root.style.setProperty('--dock-offset', w + 'px')
    }
    computeWidth()
    // Treat open/close as a viewport resize so pages recalc layout/positions
    // Use rAF to avoid re-entrancy into our own resize handler
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('resize'))
    })
    // Also send a trailing resize after the CSS transition likely completes
    const t = window.setTimeout(() => {
      window.dispatchEvent(new Event('resize'))
    }, 340)
    const onResize = () => {
      computeWidth()
    }
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('resize', onResize); window.clearTimeout(t) }
  }, [open])

  const onKeyDown = (e) => {
    if (e.key === 'Escape') setOpen(false)
  }

  const srcDoc = useMemo(() => {
    const baseHref = `${window.location.origin}/includes/`
    // Inline minimal CSS to prevent white flash before chatbot HTML/CSS hydrate
    const inlineStyle = `<style>html,body{margin:0;background:#101214;color:#fff}</style>`
    return `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><base href="${baseHref}">${inlineStyle}</head><body>${chatbotHtml}</body></html>`
  }, [])

  // Build external page context from React state / DOM
  const buildContext = () => {
    const title = document.title || ''
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
    // For case study pages, gather active item data if present
    let headings = []
    let snippet = ''
    try {
      const main = document.querySelector('main.case-study, main#main') || document.querySelector('main') || document.body
      headings = Array.from(main.querySelectorAll('h1, h2')).map(h => h.textContent.trim()).filter(Boolean).slice(0,8)
      const paragraphs = Array.from(main.querySelectorAll('p'))
      snippet = paragraphs.map(p => p.textContent.trim()).join(' ').replace(/\s+/g,' ').slice(0, 2500)
    } catch(_) {}
    // Derive a friendly page label
    let pageLabel = 'Home page'
    if (pathname.startsWith('/case/')) {
      // Try to read case study main title
      const h1 = document.querySelector('main.case-study h1')
      if (h1 && h1.textContent.trim()) pageLabel = h1.textContent.trim()
      else pageLabel = 'Case Study'
    } else if (pathname !== '/') {
      pageLabel = title || pathname.replace(/\//g,' ').trim() || 'Page'
    }
    return {
      url: window.location.href,
      path: pathname,
      title,
      description: metaDesc,
      headings,
      snippet,
      pageLabel,
      ts: Date.now()
    }
  }

  // Post context to iframe when opened or path changes
  useEffect(() => {
    if (!open) return
  const send = () => {
      const ctx = buildContext()
      if (iframeRef.current && iframeRef.current.contentWindow) {
    // Use '*' because about:srcdoc has an opaque/null origin
    iframeRef.current.contentWindow.postMessage({ type: 'PAGE_CONTEXT', payload: ctx }, '*')
      }
    }
    // If iframe already loaded, send immediately; else wait for ready handshake
    send()
    const onMessage = (e) => {
      // Accept only messages from the embedded iframe window
      if (e.source !== iframeRef.current?.contentWindow) return
      if (e.data && e.data.type === 'CHATBOT_READY') send()
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [open, pathname])

  // Also periodically refresh context while open (captures dynamic changes)
  useEffect(() => {
    if (!open) return
    const id = setInterval(() => {
      const ctx = buildContext()
      if (iframeRef.current && iframeRef.current.contentWindow) {
        iframeRef.current.contentWindow.postMessage({ type: 'PAGE_CONTEXT', payload: ctx }, window.location.origin)
      }
    }, 10000) // every 10s
    return () => clearInterval(id)
  }, [open, pathname])

  return (
    <>
      <aside
        id="chatbot-panel"
        ref={panelRef}
        className={`chatbot-dock ${open ? 'expanded' : 'collapsed'}`}
        aria-hidden={false}
        onKeyDown={onKeyDown}
      >
{/* 
        {open && (
          <div className="chatbot-toggle-row">
            <button
              ref={closeBtnRef}
              className="chatbot-toggle"
              aria-label={'Collapse assistant'}
              aria-expanded={open}
              onClick={() => setOpen(false)}
            >
              →
            </button>
            <h2 className="chatbot-title">Assistant</h2>
          </div>
        )}
         */}
        {open && (
          <div className="chatbot-body">
            {/* Dark preload overlay to avoid white flash */}
            {!loaded && <div className="chatbot-preload" aria-hidden="true" />}
            <iframe
              title="Chatbot"
              className={`chatbot-frame ${loaded ? 'is-visible' : ''}`}
              srcDoc={srcDoc}
              sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
              ref={iframeRef}
              onLoad={() => {
                setLoaded(true)
                // Fallback: push context on load as well
                const ctx = buildContext()
                if (iframeRef.current && iframeRef.current.contentWindow) {
                  iframeRef.current.contentWindow.postMessage({ type: 'PAGE_CONTEXT', payload: ctx }, '*')
                }
              }}
            />
          </div>
        )}
      </aside>
      {isWide && (
        <button
          className="chatbot-fab"
          aria-label={open ? 'Close assistant' : 'Open assistant'}
          aria-controls="chatbot-panel"
          aria-expanded={open}
          onClick={() => setOpen(prev => (isWide ? !prev : prev))}
          title={open ? 'Close assistant' : 'Open assistant'}
        >
          {open ? (
            <span className="material-icons-round" aria-hidden="true">close</span>
          ) : (
            <span className="material-icons-round" aria-hidden="true">assistant</span>
          )}
        </button>
      )}
    </>
  )
}
