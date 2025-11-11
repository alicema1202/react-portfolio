import React, { useEffect, useMemo, useRef, useState } from 'react'
// Import raw HTML so we can embed it into an iframe srcDoc
import chatbotHtml from '../../includes/chatbot.html?raw'

export default function ChatbotSidebar() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (open) {
      // Move focus into the panel when opened
      closeBtnRef.current?.focus()
    }
  }, [open])

  // Update CSS variable for dock offset in desktop layout
  useEffect(() => {
    const root = document.documentElement
    const computeWidth = () => {
      const isDesktop = window.innerWidth > 980
      const w = (open && isDesktop) ? Math.min(420, Math.floor(window.innerWidth * 0.38)) : 0
      root.style.setProperty('--dock-offset', w + 'px')
    }
    computeWidth()
    const onResize = () => {
      computeWidth()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  const onKeyDown = (e) => {
    if (e.key === 'Escape') setOpen(false)
  }

  const srcDoc = useMemo(() => {
    const baseHref = `${window.location.origin}/includes/`
    return `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><base href="${baseHref}"></head><body>${chatbotHtml}</body></html>`
  }, [])

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
            <iframe
              title="Chatbot"
              className="chatbot-frame"
              srcDoc={srcDoc}
              sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
            />
          </div>
        )}
      </aside>
      <button
        className="chatbot-fab"
        aria-label={open ? 'Close assistant' : 'Open assistant'}
        aria-controls="chatbot-panel"
        aria-expanded={open}
        onClick={() => setOpen(prev => !prev)}
        title={open ? 'Close assistant' : 'Open assistant'}
      >
        {open ? '×' : '💬'}
      </button>
    </>
  )
}
