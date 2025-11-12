import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function WorkCard({ item }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    // Ensure muted inline playback and attempt autoplay
    v.muted = true
    const tryPlay = () => {
      const p = v.play()
      if (p && typeof p.then === 'function') p.catch(() => {})
    }
    if (v.readyState >= 2) tryPlay()
    else v.addEventListener('canplay', tryPlay, { once: true })
    return () => {
      v.removeEventListener && v.removeEventListener('canplay', tryPlay)
    }
  }, [item?.video])
  return (
    <article className="work-card" role="listitem">
      <Link to={`/${item.id}`} className="card-link" aria-label={`${item.title} case study`}>
  <div className="thumb" aria-hidden="true" style={{ aspectRatio: '3 / 2' }}>
          <span className="thumb-inner">
      {item.video ? (
              <video
                className="thumb-video"
        ref={videoRef}
                autoPlay
        muted
        defaultMuted
                loop
                playsInline
        preload="auto"
                poster={item.image || undefined}
        aria-hidden="true"
        tabIndex={-1}
              >
                <source src={item.video} type="video/mp4" />
              </video>
            ) : item.image ? (
              <img src={item.image} alt="" />
            ) : (
              item.initials
            )}
          </span>
        </div>
        <div className="card-body">
          <h3>{item.title}</h3>
          <ul className="tags" aria-label="Tags">
            {item.tags.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </Link>
    </article>
  )
}
