import React from 'react'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'
import SiteFooter from './components/SiteFooter'

export default function App() {
  return (
    <>
      <Hero />
      <main id="main">
        <WorkSection variant="select" title="Selected Work" maxItems={4} />
        <WorkSection variant="other" title="More Projects" maxItems={6} />
      </main>
  <SiteFooter />
    </>
  )
}
