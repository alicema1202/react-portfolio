import React, { useEffect, useRef, useMemo } from 'react'
import { Link } from 'react-router-dom'
import VideoModal from './VideoModal'
import { getProjectTheme } from '../data/projectThemes'

export default function WorkCard({ item }) {
  const videoRef = useRef(null)
  const theme = useMemo(() => getProjectTheme(item.id) || null, [item.id])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

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

  // choose wrapper depending on internal or external link
  // determine wrapper
let Wrapper;
const [modalOpen, setModalOpen] = React.useState(false);

if (item.videoToPlay) {
  // open modal overlay
  Wrapper = ({ children }) => (
    <a
      className="card-link"
      aria-label={`${item.title} video overlay`}
      onClick={() => {
        // call your modal open function here
        setModalOpen(true)
      }}
    >
      {children}
    </a>
  );
} else if (item.externalUrl) {
  Wrapper = ({ children }) => (
    <a
      href={item.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-link"
      aria-label={`${item.title} external link`}
    >
      {children}
    </a>
  );
} else {
  Wrapper = ({ children }) => (
    <Link
      to={`/${item.id}`}
      className="card-link"
      aria-label={`${item.title} case study`}
    >
      {children}
    </Link>
  );
}
//     <main className="case-study" style={{ ...(theme ? { ['--project-brand']: theme.brand, ['--project-accent']: theme.accent } : {}) }}>

  return (
    <article className="work-card" role="listitem" style={{ ...(theme ? { ['--project-brand']: theme.brand, ['--project-accent']: theme.accent } : {}) }}>
      <Wrapper>
        <img className="year" src={item.year} alt="" />
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
          <h3 className='work-card-title'>{item.title}</h3>
          <ul className="tags" aria-label="Tags">
            {item.tags.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </Wrapper>
      <VideoModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          videoSrc={item.videoToPlay}
          // poster={item.image}
        />
    </article>
  )
}
