import React from 'react'
import GradualBlur from '../../Reactbits/GradualBlur/GradualBlur'
import Masonry from '../../Reactbits/Masonry/Masonry'
import LightRays from '../../Reactbits/LightRays/LightRays'
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import SiteFooter from '../components/SiteFooter'
import { useParams, Link, useNavigate } from 'react-router-dom'
import TiltedCard from '../../Reactbits/TiltedCard/TiltedCard';
import VideoPlayerCard from '../components/VideoPlayerCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const items = [
    {
      id: "1",
  img: "/static/images/M1.jpg",
      height: 350,
    },
    {
      id: "2",
  img: "/static/images/M2.jpg",
      height: 550,
    },
    {
      id: "3",
  img: "/static/images/M3.jpg",
      height: 700,
    },
    {
      id: "4",
  img: "/static/images/M4.jpg",
      height: 500,
    },
    {
      id: "5",
  img: "/static/images/M5.jpg",
      height: 600,
    },
    {
      id: "6",
  img: "/static/images/M6.jpg",
      height: 500,
    },
    {
      id: "7",
  img: "/static/images/M7.jpg",
      height: 480,
    },
    {
      id: "8",
  img: "/static/images/M8.jpg",
      height: 500,
    },
    {
      id: "9",
  img: "/static/images/M9.jpg",
      height: 300,
    },
    {
      id: "10",
  img: "/static/images/M10.jpg",
      height: 650,
    },
    {
      id: "11",
  img: "/static/images/M11.jpg",
      height: 500,
    },
    {
      id: "12",
  img: "/static/images/M12.jpg",
      height: 600,
    },
    {
      id: "13",
  img: "/static/images/M13.jpg",
      height: 600,
    },
    {
      id: "14",
  img: "/static/images/M14.jpg",
      height: 600,
    },
    
    // ... more items
];

export default function About() {
    useRevealOnScroll()
    const navigate = useNavigate()
    return (
        <main className='about' style={{ paddingTop: '103px' }}>
        <LightRays
          raysOrigin="top-right"
          raysColor="#ffffffff"
          raysSpeed={1.5}
          lightSpread={1.2}
          rayLength={2}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.1}
          distortion={0}
          className="custom-rays"
        />
        <div className="container">
            <div className='about-section'>
                <VideoPlayerCard
                    title="A Slice of My Life 🍰"
                    // subtitle="Alice Ma"
                    src="/static/images/sliceoflife.mov" /* replace with your actual video path */
                    aspectRatio="2/2"
                    autoPlay={false}
                    loop={false}
                />
        <div className="about-text-">
          <h3 className="entry-headline">Nice to meet you, I'm Alice! 👋🏻</h3>
          <p>As a designer, I'm interested in specializing in design systems, where I can use my knowledge of design and development to create a cohesive and consistent foundation for the user experience of products.</p>
          <p>I graduated from UC San Diego this Spring, where I majored in Cognitive Science with a specialization in Interaction Design, with minors in Computer Science and Design.</p>
          <p>When I'm not immersed in Figma for work or personal projects, you may find me doing a new set of nails 💅, catching the latest movie at AMC 🍿, or crafting new beverages to start off my day 🍵! </p>
          {/* <p>Outside of design, here are three fun facts about me:</p>
          <p>
             <ul>
              <li>I have a large cabinet filled with nail supplies! My friends have said that I could open a salon.</li>
              <li>My </li>
              <li>I'm a big fan of indie music and often attend local concerts.</li>
            </ul> 
          </p> */}

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.linkedin.com/in/alicema1215/" className="button" target="_blank" rel="noopener noreferrer">
              LinkedIn&nbsp;
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" style={{ fontSize: 24 }} /> 
            </a>
            <a href="mailto:alicema1202@gmail.com" className="button" target="_blank" rel="noopener noreferrer">
              Email
              <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" style={{ fontSize: 24 }} />
            </a>
          </div>
        </div>
            </div> 
            <div className='more-slices'> 
                <h3 className="entry-headline">More Slices 🎂</h3>
                <Masonry
                    items={items}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.05}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.95}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                /> 
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
