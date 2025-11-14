import React from 'react'
import GradualBlur from '../../Reactbits/GradualBlur/GradualBlur'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import SiteFooter from '../components/SiteFooter'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  return (
    <main className="container" style={{ padding: '3rem 0' }}>
      <h1>Contact</h1>
      <p>Want to get in touch? Email me at <a href="mailto:alicesma1202@gmail.com">alicesma1202@gmail.com</a> or reach out on LinkedIn.</p>
    </main>
  )
}
