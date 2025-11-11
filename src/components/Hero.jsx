import React from 'react'

export default function Hero() {
  return (
    <header className="hero" role="banner">
      <div className="container">
        <p className="eyebrow">Product Designer • UX Research • Prototyping</p>
        <h1>
          Designing clear, humane products
          <span className="accent"> that people love to use.</span>
        </h1>
        <p className="lede">
          I’m a UX designer focused on shipping accessible, outcome-driven experiences. Below are a few selected case studies and explorations.
        </p>
        <div className="cta-row">
          <a className="button primary" href="#selected-work">View selected work</a>
          <a className="button" href="#contact">Contact</a>
        </div>
      </div>
    </header>
  )
}
