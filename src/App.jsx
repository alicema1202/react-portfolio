import React from 'react'
import Hero from './components/Hero'
import WorkSection from './components/WorkSection'

export default function App() {
  return (
    <>
      <Hero />
      <main id="main">
        <WorkSection variant="select" title="Selected Work" maxItems={4} />
        <WorkSection variant="other" title="More Projects" maxItems={6} />
      </main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Your Name — UX Design Portfolio</p>
      </footer>
    </>
  )
}
