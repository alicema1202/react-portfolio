import React, { useState } from 'react'

export default function Carousel({ images = [], alt = '' }) {
  const [idx, setIdx] = useState(0)
  if (!images.length) return null
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)
  return (
    <div className="carousel" role="region" aria-label="Image carousel">
      <figure className="carousel-frame">
        <img src={images[idx]} alt={alt || ''} />
      </figure>
      <div className="carousel-controls">
        <button type="button" onClick={prev} aria-label="Previous image" className="carousel-btn">←</button>
        <span className="carousel-status" aria-live="polite">{idx + 1}/{images.length}</span>
        <button type="button" onClick={next} aria-label="Next image" className="carousel-btn">→</button>
      </div>
    </div>
  )
}
