import React from 'react'

export default function QuoteBlock({ text, cite }) {
  if (!text) return null
  return (
    <figure className="quote-block" style={{ margin: '1.25rem 0', padding: '0', color: 'var(--text, inherit)' }}>
      <blockquote
        style={{
          margin: 0,
          padding: '1rem 1.25rem',
          borderLeft: '4px solid var(--project-brand, var(--brand-accent, var(--muted)))',
          background: 'color-mix(in oklab, var(--project-brand, var(--brand-accent, #888)) 12%, transparent)',
          borderRadius: '8px',
          fontSize: '36px',
          fontFamily: 'Instrument Serif, serif',
          fontStyle: 'italic',
          lineHeight: 'normal',
        }}
      >
        {text}
      </blockquote>
      {cite ? (
        <figcaption style={{ marginTop: '.5rem', opacity: .75 }}>— {cite}</figcaption>
      ) : null}
    </figure>
  )
}
