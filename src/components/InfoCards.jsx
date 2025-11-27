import React from 'react'

export default function InfoCards({ items = [] }) {
  if (!items.length) return null
  return (
    <div className="info-cards" role="list" aria-label="Informational cards">
      {items.map((c, i) => (
        <div className="info-card" role="listitem" key={i}>
          {c.title ? <div className="info-card-heading">
            <h3 className="cs-subheading">{c.title}</h3>
          </div> : null}
          {c.text ? <p>{c.text}</p> : null}
          {/* {c.meta ? <p className="info-card-meta">{c.meta}</p> : null} */}
        </div>
      ))}
    </div>
  )
}
