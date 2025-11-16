import React from 'react'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import SiteFooter from '../components/SiteFooter'
import GradualBlur from '../../Reactbits/GradualBlur/GradualBlur'
import GlassSurface from '../../Reactbits/GlassSurface/GlassSurface'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function ThankYou() {
  useRevealOnScroll()
  return (
    <>
      <Hero 
      showMessage={false}
      narrowTitle='Thank You!'
      wideTitle='Thank You!'
      lede='Your message has been sent successfully! '
      ctaLabel='Return to Home'
      ctaHref='../'
      />
      <main id="main">
        <SiteFooter />
      </main>
      <GradualBlur
        target="parent"
        position="bottom"
        height="4rem"
        strength={1}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />

  
    </>
  )
}
