import React, { useEffect, useState } from 'react'
import GradualBlur from '../../Reactbits/GradualBlur/GradualBlur'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import SiteFooter from '../components/SiteFooter'
import { useLocation } from 'react-router-dom'


export default function Contact() {
    useRevealOnScroll()
    const [isNarrow, setIsNarrow] = useState(false)
    useEffect(() => {
        if (typeof window === 'undefined') return
        const mq = window.matchMedia('(max-width: 900px)')
        const update = () => setIsNarrow(mq.matches)
        update()
        if (mq.addEventListener) mq.addEventListener('change', update)
        else mq.addListener && mq.addListener(update)
        return () => {
            if (mq.removeEventListener) mq.removeEventListener('change', update)
            else mq.removeListener && mq.removeListener(update)
        }
    }, [])
  const location = useLocation()
  const sent = new URLSearchParams(location.search).get('sent') === '1'
  const nextUrl = typeof window !== 'undefined' ? `${window.location.origin}/contact?sent=1` : '/contact?sent=1'

  return (
    <main className="contact">
        <div className='container'>
            <div className="messages-block">
                <img
                    className="avatar"
                    src="/static/images/disneypic.png"
                    alt="Alice profile"
                    width={64}
                    height={64}
                    loading="eager"
                    decoding="async"
                />
                <div className='messages'>
                    <div className="message incoming" aria-label="Intro message from Alice">
                        <div className="bubble" role="text">Need to get in touch with me?</div>
                    </div>
                    <div className="message incoming" aria-label="Intro message from Alice">
                            <div className="bubble" role="text">
                                {isNarrow ? 'Fill out the form below 👇🏻' : 'Fill out the form on the right 👉🏻'}
                            </div>
                    </div>
                    <div className="message incoming" aria-label="Intro message from Alice">
                        <div className="bubble" role="text">Or reach me here: <br/>
                        <a href="mailto:alicema1202@gmail.com">alicema1202@gmail.com</a>
                        <a href="https://linkedin.com/in/alicema1215" target="_blank" rel="noopener noreferrer">linkedin.com/in/alicema1215</a>
                    </div>
                    <svg className="text-tick" xmlns="http://www.w3.org/2000/svg" width="24" height="33" viewBox="0 0 24 33" fill="none">
                    <path d="M10.8817 18.1141C11.228 10.3128 11.0002 0.978607 11.0002 0.978607L23.3309 22.7538C17.8521 29.932 12.908 32.1775 0.210938 32.9612C7.37937 28.7654 10.5354 25.9154 10.8817 18.1141Z"/>
                    </svg>
                </div>
            </div>
            </div>
            <div className="contact-card">
                <h1 className="entry-headline">Let’s have a conversation!</h1>
                <p>Fill out the form below with your message, and I'll get back to you as soon as possible!</p>

                {sent && (
                    <div className="info-card" style={{ margin: '1rem 0' }}>
                    <strong style={{ display: 'block', marginBottom: 6 }}>Thanks!</strong>
                    <span>I received your message and will get back to you soon.</span>
                    </div>
                )}

                <form
                    className="contact-form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    accept-charset="UTF-8"
                    style={{ display: 'grid', gap: '16px', maxWidth: 620 }}
                >
                    {/* Honeypot field to reduce spam */}
                    <input type="hidden" name="access_key" value="d45e5f52-19f3-4fc1-8e04-16d73cbdae9c"/>
                    <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
                    {/* Disable Captcha and set redirect */}
                    <input type="hidden" name="redirect" value="https://alicemadesign.com/thankyou" />
                    {/* <input type="hidden" name="_template" value="table" /> */}
                    {/* <input type="hidden" name="_subject" value="New message from portfolio" /> */}

                    <label>
                    Name <i>*</i>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--lightbg)', color: 'var(--text)' }}
                    />
                    </label>

                    <label>
                    Email <i>*</i>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--lightbg)', color: 'var(--text)' }}
                    />
                    </label>

                    <label>
                    Message <i>*</i>
                    <textarea
                        name="message"
                        placeholder="Start typing in your message here..."
                        required
                        rows={6}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--lightbg)', color: 'var(--text)', resize: 'vertical' }}
                    />
                    </label>

                    <div>
                    <button className="button" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
        

      

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
      <SiteFooter />
    </main>
  )
}
