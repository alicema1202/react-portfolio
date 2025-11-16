import React from 'react'
import Hero from '../components/Hero'
import WorkSection from '../components/WorkSection'
import SiteFooter from '../components/SiteFooter'
import GradualBlur from '../../Reactbits/GradualBlur/GradualBlur'
import GlassSurface from '../../Reactbits/GlassSurface/GlassSurface'
import useRevealOnScroll from '../hooks/useRevealOnScroll'

export default function NotFound() {
  useRevealOnScroll()
  return (
    <>
      <Hero 
      showMessage={false}
      narrowTitle='404 - Page Not Found'
      wideTitle='Page Not Found'
      lede='The page you are looking for does not exist 😥'
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
