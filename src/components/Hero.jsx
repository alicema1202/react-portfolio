import React, { useEffect, useState } from 'react'
import LightRays from '../../Reactbits/LightRays/LightRays'
import BlurText from '../../Reactbits/BlurText/BlurText'

// Reusable hero component
// Props: 
//  message: short intro bubble text
//  emojiSrc: optional inline image path
//  narrowTitle / wideTitle: titles for mobile vs desktop (auto switches at 900px)
//  lede: paragraph content (can include markup via children)
//  showRays: enable LightRays background
//  raysProps: override default LightRays props
//  className: additional class names
export default function Hero({
  message = "Hi, I'm Alice!",
  emojiSrc = '/static/images/memoji.png',
  narrowTitle = 'UX Designer',
  wideTitle = 'User Experience Designer',
  lede = (
    <>
      driven by <i>impact</i> and passionate about crafting <i>scalable design systems</i>, with a keen eye for <i>visual detail</i> and <i>precision</i>.
    </>
  ),
  showRays = true,
  raysProps = {},
  showMessage = true,
  ctaLabel = '',
  ctaHref = '/#',
  onCtaClick,
  className = ''
}) {
  const [isNarrow, setIsNarrow] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(max-width: 900px)')
    const update = () => setIsNarrow(mq.matches)
    update()
    if (mq.addEventListener) mq.addEventListener('change', update)
    else mq.addListener && mq.addListener(update)
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update)
      else mq.removeListener && mq.removeListener(update)
    }
  }, [])

  const mergedRays = {
    raysOrigin: 'top-right',
    raysColor: '#ffffffff',
    raysSpeed: 1.5,
    lightSpread: 1.2,
    rayLength: 2,
    followMouse: true,
    mouseInfluence: 0.3,
    noiseAmount: 0.1,
    distortion: 0,
    className: 'custom-rays',
    ...raysProps
  }

  return (
    <header className={`hero ${className}`.trim()} role="banner">
      {showRays && <LightRays {...mergedRays} />}
      <div className="container">
        {showMessage && (
          <div className="message incoming" aria-label="Intro message">
            <div className="bubble" role="text">
              {message} {emojiSrc && <img className="emoji memoji" src={emojiSrc} alt="" aria-hidden="true" />}
            </div>
            <svg className="text-tick" xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
              <path d="M10.8817 18.1141C11.228 10.3128 11.0002 0.978607 11.0002 0.978607L23.3309 22.7538C17.8521 29.932 12.908 32.1775 0.210938 32.9612C7.37937 28.7654 10.5354 25.9154 10.8817 18.1141Z" />
            </svg>
          </div>
        )}
        <BlurText
          text={isNarrow ? narrowTitle : wideTitle}
          delay={30}
          animateBy="letters"
          direction="bottom"
          className="title"
        />
  <p className="lede">{lede}</p>
        {ctaLabel && (
          <a
            href={ctaHref}
            onClick={onCtaClick}
            className="button"
            style={{ textDecoration: 'none'}}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </header>
  )
}
