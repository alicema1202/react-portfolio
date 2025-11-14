import React, { useEffect, useRef, useState } from 'react'
import GlassSurface from '../../Reactbits/GlassSurface/GlassSurface'

/**
 * VideoPlayerCard
 * Props:
 *  - src: primary video source URL (string)
 *  - sources: optional array of { src, type } for multiple formats
 *  - poster: poster image URL
 *  - title: heading displayed above (or below if preferred)
 *  - aspectRatio: e.g. '16/9' or '4/3' (defaults 16/9)
 *  - autoPlay: boolean (default false)
 *  - loop: boolean (default false)
 *  - muted: initial muted state (default false)
 *  - preload: video preload attribute (default 'metadata')
 */
export default function VideoPlayerCard({
  src,
  sources = [],
  poster = '',
  title = '',
  subtitle = '',
  aspectRatio = '16/9',
  autoPlay = false,
  loop = false,
  muted = false,
  preload = 'metadata',
  className = '',
  onPlay,
  onPause,
}) {
  const videoRef = useRef(null)
  const progressTrackRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)
  const [isMuted, setIsMuted] = useState(muted)
  const [volume, setVolume] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [flashControls, setFlashControls] = useState(false)
  const flashTimerRef = useRef(null)
  const [hideHover, setHideHover] = useState(false)
  // Format time mm:ss
  const fmt = (t) => {
    if (!isFinite(t)) return '0:00'
    const m = Math.floor(t / 60)
    const s = Math.floor(t % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
    } else {
      v.pause()
    }
  // Suppress hover-driven visibility after a click
  setHideHover(true)
    // Flash the play/pause button for 1s on click-triggered toggles
    setFlashControls(true)
    if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
    flashTimerRef.current = setTimeout(() => {
      setFlashControls(false)
      flashTimerRef.current = null
    }, 700)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  const onVolumeChange = (e) => {
    const v = videoRef.current
    if (!v) return
    const val = parseFloat(e.target.value)
    v.volume = val
    if (val === 0) v.muted = true
    else if (v.muted && val > 0) v.muted = false
    setVolume(val)
    setIsMuted(v.muted)
  }

  const seekToFraction = (fraction) => {
    const v = videoRef.current
    if (!v || !duration) return
    const clamped = Math.min(1, Math.max(0, fraction))
    v.currentTime = clamped * duration
  }

  const onProgressClick = (e) => {
    const track = progressTrackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const frac = (e.clientX - rect.left) / rect.width
    seekToFraction(frac)
  }

  const updateFromPointer = (clientX) => {
    const track = progressTrackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const frac = (clientX - rect.left) / rect.width
    seekToFraction(frac)
  }

  const onPointerDown = (e) => {
    if (!duration) return
    setDragging(true)
    updateFromPointer(e.clientX)
    const el = e.currentTarget
    el.setPointerCapture?.(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!dragging) return
    updateFromPointer(e.clientX)
  }

  const endDrag = (e) => {
    if (!dragging) return
    setDragging(false)
    e.currentTarget.releasePointerCapture?.(e.pointerId)
  }

  // Global pointer tracking while dragging (allows leaving track area)
  useEffect(() => {
    if (!dragging) return
    const onMove = (e) => { updateFromPointer(e.clientX) }
    const onUp = () => { setDragging(false) }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp, { once: true })
    window.addEventListener('pointercancel', onUp, { once: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [dragging])

  const onProgressKey = (e) => {
    if (!duration) return
    let handled = true
    const step = 5 // seconds per arrow
    const v = videoRef.current
    if (!v) return
    switch (e.key) {
      case 'ArrowRight': v.currentTime = Math.min(duration, v.currentTime + step); break
      case 'ArrowLeft': v.currentTime = Math.max(0, v.currentTime - step); break
      case 'Home': v.currentTime = 0; break
      case 'End': v.currentTime = duration; break
      default: handled = false
    }
    if (handled) {
      e.preventDefault()
      e.stopPropagation()
    }
  }

  const requestFullscreen = () => {
    const wrapper = videoRef.current?.parentElement
    if (!wrapper) return
    if (!document.fullscreenElement) {
      if (wrapper.requestFullscreen) wrapper.requestFullscreen()
    } else {
      document.exitFullscreen?.()
    }
  }

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const onLoaded = () => setDuration(v.duration || 0)
    const onTime = () => setCurrent(v.currentTime || 0)
    const onPlayEv = () => { setPlaying(true); onPlay && onPlay() }
    const onPauseEv = () => { setPlaying(false); onPause && onPause() }
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement)
    v.addEventListener('loadedmetadata', onLoaded)
    v.addEventListener('timeupdate', onTime)
    v.addEventListener('play', onPlayEv)
    v.addEventListener('pause', onPauseEv)
    document.addEventListener('fullscreenchange', onFsChange)
    return () => {
      v.removeEventListener('loadedmetadata', onLoaded)
      v.removeEventListener('timeupdate', onTime)
      v.removeEventListener('play', onPlayEv)
      v.removeEventListener('pause', onPauseEv)
      document.removeEventListener('fullscreenchange', onFsChange)
    }
  }, [onPlay, onPause])

  useEffect(() => {
    // Sync isMuted state if prop changed dynamically (optional)
    const v = videoRef.current
    if (!v) return
    v.muted = muted
    setIsMuted(muted)
  }, [muted])

  // Clear flash timer on unmount
  useEffect(() => {
    return () => {
      if (flashTimerRef.current) {
        clearTimeout(flashTimerRef.current)
        flashTimerRef.current = null
      }
    }
  }, [])

  
  const progressPct = duration ? current / duration : 0
  const remaining = duration - current
  const onCardKeyDown = (e) => {
    // Toggle play/pause with Space when the card is focused/active
    const key = e.key
    if (key === ' ' || key === 'Spacebar' || key === 'Space') {
      if (e.ctrlKey || e.altKey || e.metaKey) return
      e.preventDefault()
      e.stopPropagation()
      togglePlay()
      // Flash the play/pause button for 1s
      setFlashControls(true)
      if (flashTimerRef.current) clearTimeout(flashTimerRef.current)
      flashTimerRef.current = setTimeout(() => {
        setFlashControls(false)
        flashTimerRef.current = null
      }, 700)
    }
  }
  return (
    <div
      className={`video-player-card ${className}`.trim()}
      data-playing={playing ? 'true' : 'false'}
      tabIndex={0}
      onKeyDown={onCardKeyDown}
  onMouseLeave={() => setHideHover(false)}
      aria-label={title ? `Video player: ${title}` : 'Video player'}
    >
      
      <div className="vpc-video-wrapper" style={{ aspectRatio }}>
        <video
          ref={videoRef}
          className="vpc-video"
          src={src}
          poster={poster}
          preload={preload}
          loop={loop}
          muted={isMuted}
          playsInline
          onClick={togglePlay}
          autoPlay={autoPlay}
        >
          {sources.map((s, i) => (
            <source key={i} src={s.src} type={s.type} />
          ))}
          Your browser does not support the video tag.
        </video>
      </div>
  <div className="buttons-group" data-flash={flashControls ? 'true' : 'false'} data-hide-hover={hideHover ? 'true' : 'false'}>
        <button type="button" className="vpc-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
          <span className="material-icons-round" aria-hidden="true">{playing ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
      <GlassSurface 
        displace={3}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={15}
        brightness={50}
        opacity={0.93}
        blur={11}
        mixBlendMode="normal"
        borderWidth={0}
        backgroundOpacity={0.6}
        style={{ opacity: '1', margin: '0', padding: '0' }}
      >
        <div className="vpc-controls">
            <div className='label'>
                {title && <div className="entry-headline">{title}</div>}
                {subtitle && <p className="vpc-subtitle">{subtitle}</p>}
            </div>
            
            <div className='progress-and-time'>
                <div className="vpc-time">{fmt(current)}</div>
                <div
                  ref={progressTrackRef}
                  className="vpc-progress-track"
                  onClick={onProgressClick}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={endDrag}
                  onPointerCancel={endDrag}
                  role="slider"
                  tabIndex={0}
                  aria-label="Seek"
                  aria-valuemin={0}
                  aria-valuemax={duration || 0}
                  aria-valuenow={current}
                  aria-valuetext={`${fmt(current)} of ${fmt(duration)}`}
                  onKeyDown={onProgressKey}
                  data-dragging={dragging ? 'true' : 'false'}
                >
                  <div className="vpc-progress-fill" style={{ width: `${progressPct * 100}%` }} />
                </div>
                <div className="vpc-time">-{fmt(remaining)}</div>
            </div>
            {/* <div className="buttons-group">
                <button type="button" className="vpc-btn" onClick={togglePlay} aria-label={playing ? 'Pause' : 'Play'}>
                <span className="material-icons-round" aria-hidden="true">{playing ? 'pause' : 'play_arrow'}</span>
            </button>
            </div> */}
        </div>
    </GlassSurface>

    </div>
  )
}
