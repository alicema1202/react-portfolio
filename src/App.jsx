import React from 'react'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import SiteFooter from './components/SiteFooter'
import GradualBlur from '../Reactbits/GradualBlur/GradualBlur'
import GlassSurface from '../Reactbits/GlassSurface/GlassSurface'
import useRevealOnScroll from './hooks/useRevealOnScroll'

export default function App() {
  useRevealOnScroll()
  return (
    <>
      <Hero />
      <main id="main">
        <WorkSection variant="select" title="Selected Work" maxItems={4} />
        <WorkSection variant="other" title="More Projects" maxItems={6} />
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
