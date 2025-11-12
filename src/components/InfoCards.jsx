import React from 'react'

export default function InfoCards({ items = [] }) {
  if (!items.length) return null
  return (
    <div className="info-cards" role="list" aria-label="Informational cards">
      {items.map((c, i) => (
        <div className="info-card" role="listitem" key={i}>
          {c.title ? <h3 className="info-card-title">{c.title}</h3> : null}
          {c.text ? <p className="info-card-text">{c.text}</p> : null}
          {c.meta ? <p className="info-card-meta">{c.meta}</p> : null}
        </div>
      ))}
    </div>
  )
}
