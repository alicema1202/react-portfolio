import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function SiteFooter() {
    const LINKS = {
        linkedin: 'https://www.linkedin.com/in/alicema1202',
        email: 'mailto:hello@alicemadesign.com',
    }
  return (
    <footer className="site-footer">
        <div className="footer-content">
            <div className="messages">
                <div className="message incoming" id="hi-im-alice" aria-label="Intro message from Alice">
                    <div className="bubble" role="text">Thanks for stopping by! <img className="emoji memoji" src="static/images/memoji matcha.png" alt="" aria-hidden="true" /></div>
                </div>
                <div className="message incoming" id="hi-im-alice" aria-label="Intro message from Alice">
                    <a
                        className="bubble"
                        role="link"
                        href="https://www.linkedin.com/in/alicema1215"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}
                        aria-label="Open LinkedIn profile"
                    >
                        <span>LinkedIn</span>
                        <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" style={{ fontSize: 24 }} />
                    </a>
                </div>
                <div className="message incoming" id="hi-im-alice" aria-label="Intro message from Alice">
                    <a
                        className="bubble"
                        role="link"
                        href="mailto:alicema1202@gmail.com"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none'}}
                        aria-label="Send an email"
                    >
                        <span>Email</span>
                        <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" style={{ fontSize: 24 }} />
                    </a>
                    <svg className="text-tick" xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
                    <path d="M10.8817 18.1141C11.228 10.3128 11.0002 0.978607 11.0002 0.978607L23.3309 22.7538C17.8521 29.932 12.908 32.1775 0.210938 32.9612C7.37937 28.7654 10.5354 25.9154 10.8817 18.1141Z"/>
                    </svg>
                </div>
            </div>
            <div className="footer-links"> 
                <a href="">work</a>
                <a href="">about</a>
                <a href="">contact</a>
                <a href="">resume</a>
            </div>
        </div>
        <p>&copy; {new Date().getFullYear()} Design + Code by Alice Ma</p>
    </footer>
  )
}
