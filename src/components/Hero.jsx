import React, { useEffect, useState } from 'react'
import LightRays from '../../Reactbits/LightRays/LightRays'
import LiquidEther from '../../Reactbits/LiquidEther/LiquidEther'
import Galaxy from '../../Reactbits/Galaxy/Galaxy'

export default function Hero() {
  const [isNarrow, setIsNarrow] = useState(false)

  // Swap headline text for small screens (<900px)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(max-width: 900px)')
    const update = () => setIsNarrow(mq.matches)
    update()
    // Modern browsers
    if (mq.addEventListener) mq.addEventListener('change', update)
    else mq.addListener && mq.addListener(update) // Safari fallback
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update)
      else mq.removeListener && mq.removeListener(update)
    }
  }, [])
  return (
    <header className="hero" role="banner">
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffffffc5"
          raysSpeed={1.5}
          lightSpread={1.3}
          rayLength={2.4}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        {/* <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1}
          glowIntensity={0.08}
          twinkleIntensity={0.3}
          saturation={0}
          hueShift={140}
          speed={0.1}
          rotationSpeed={0}
          starSpeed={0.01}
          repulsionStrength={0.5}
        /> */}
        <div className="container">
          {/* Incoming message bubble with inline emoji */}
          <div className="message incoming" id="hi-im-alice" aria-label="Intro message from Alice">
            <div className="bubble" role="text">Hi, I'm Alice! <img className="emoji memoji" src="static/images/memoji.png" alt="" aria-hidden="true" /></div>
            <svg className="text-tick" xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
              <path d="M10.8817 18.1141C11.228 10.3128 11.0002 0.978607 11.0002 0.978607L23.3309 22.7538C17.8521 29.932 12.908 32.1775 0.210938 32.9612C7.37937 28.7654 10.5354 25.9154 10.8817 18.1141Z"/>
              </svg>
          </div>
          <h1>
            {isNarrow ? 'UX Designer' : 'User Experience Designer'}
          </h1>
          <p className="lede">
            driven by <i>impact</i> and passionate about crafting <i>scalable design systems</i>, with a keen eye for <i>visual detail</i> and <i>precision</i>.

          </p>
        </div>
        
      </header>
  )
}
