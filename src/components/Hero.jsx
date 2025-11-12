import React from 'react'
import LightRays from '../../Reactbits/LightRays/LightRays'
export default function Hero() {
  return (
    <header className="hero" role="banner">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="container">
          {/* Incoming message bubble with inline emoji */}
          <div className="message incoming" id="hi-im-alice" aria-label="Intro message from Alice">
            <div className="bubble" role="text">Hi, I'm Alice! <img className="emoji memoji" src="static/images/memoji.png" alt="" aria-hidden="true" /></div>
          </div>
          <h1>
            User Experience Designer
          </h1>
          <p className="lede">
            driven by <i>impact</i> and passionate about crafting <i>scalable design systems</i>, with a keen eye for <i>visual detail</i> and <i>precision</i>.

          </p>
        </div>
      </header>
  )
}
