import React from 'react'
import SiteFooter from '../components/SiteFooter'
import CaseAside from '../components/CaseAside'
import GradualBlur from '../../Reactbits/GradualBlur/GradualBlur'
import LightRays from '../../Reactbits/LightRays/LightRays' 
import useRevealOnScroll from '../hooks/useRevealOnScroll'
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function Resume() {
  useRevealOnScroll()
  const navigate = useNavigate()

  // Define About sections (ids must match anchors in TOC)
  const sections = [
    {
      id: 'education',
      title: '📘 Education',
      entries: [
        {
          location: 'University of California, San Diego',
          role: 'Bachelor of Science',
          setting: 'Sep 2021  Jun 2025 · La Jolla, CA',
          bullets: [
            'Major: Cognitive Science (Interaction Design)',
            'Minors: Computer Science, Design',
            'GPA: 3.96/4.00'
          ]
        }
      ]
    },
    {
      id: 'professional experience',
      title: '👩🏻‍💻 Professional Experience',
      entries: [
        {
          location: 'Housweet',
          role: 'UI/UX Designer',
          setting: 'Oct 2025 - Present · Los Angeles, CA',
          bullets: [
            'Lead the end-to-end product design process for an innovative real estate platform where agents bid to receive property representation rights, designing impactful features from ideation to execution in collaboration with engineering to seamlessly integrate APIs into designs',
            'Design cohesive color palettes, typography systems, and UI components to establish a unified, scalable design system across platforms',
            'Work in Agile sprints cross-functionally with the graphic design and marketing to build MVP and develop brand identity assets'
          ]
        },
        {
          location: 'MPA Collaborative',
          role: 'Web Developer + UX Designer',
          setting: 'Jun - Sept 2024 · San Diego, CA',
          bullets: [
            'Partnered with stakeholders to redesign website for modern design standards with improved SEO and accessibility (WCAG, ADA) compliance',
            'Conducted website audit, competitive analysis, and SWOT analysis in collaboration with UX researcher and designers',
            'Designed new UI elements, restructured information architecture, and prototyped high-fidelity screens in Figma',
            'Implemented approved designs with custom components on their existing site using HTML, CSS, and JavaScript'
          ]
        },
        {
          location: 'Pegasystems',
          role: 'UX Design Intern',
          setting: 'May - Aug 2023 · Waltham, MA',
          bullets: [
            'Conducted 10+ internal usability studies on live enterprise software, identifying user pain points and informing design improvements that were implemented in the launch of Pega Platform Infinity ‘24, a low-code platform for workflow automation and AI decisioning',
            'Designed new Figma library components for the Constellation design system, enhancing consistency across the product suite',
            'Aligned UX patterns alongside senior designers to ensure features’ scalability and reusability, delivering 30+ screens for developer handoff',
            'Tracked ongoing projects using Agile Studio, Pegasystems’ built-in Agile project management software with Scrum methodology'
          ]
        }
      ]
    },
    {
      id: 'academic experience',
      title: '🏫 Academic Experience',
      entries: [
        {
          location: 'Design Co UP-Grade',
          role: 'UX Designer',
          setting: 'Jun - Sep 2025 · San Diego, CA',
          bullets: [
            'Collaborated with industry mentor and cross-functional team to develop a trained LLM that recommends structured academic pathways',
            'Conducted 25+ user interviews and surveys with UCSD students to uncover pain points in college course planning and navigation ',
            'Created low-fidelity wireframes for user testing and designed UCSD-branded high-fidelity screens for developer handoff'
          ]
        },
        {
          location: 'UC San Diego',
          role: 'Instructional Assistant',
          setting: 'Jan 2024 - Mar 2025 · San Diego, CA',
          bullets: [
            'Held office hours and led weekly studio sessions to help students understand user-centered design and the end-to-end design process',
            'Assisted in refining course curriculum, updating it to emphasize design best practices and hands-on prototyping',
            'Graded and provided detailed feedback for 200+ student assignments on topics relating to design heuristics and UX/UI design'
          ]
        },
        {
          location: 'ACM at UC San Diego',
          role: 'UX Designer',
          setting: 'Oct 2023 - Apr 2024 · San Diego, CA',
          bullets: [
            'Collaborated with team of 4 on high-fidelity prototype for a meal kit delivery service and presented proof of concept at ACM showcase',
            'Developed 2 user personas and ran in-depth competitive analysis, 30+ surveys, 10+ interviews, and 9 usability tests to uncover design gaps',
            'Created a design system with Figma’s component library to organize colors, logos, spacing, typography, iconography, and components',
            'Provided mentorship to next cohort of designers, assisting them by providing design resources and holding team rapid prototyping sessions'
          ]
        }
      ]
    },
    {
      id: 'awards',
      title: '🏆 Awards',
      entries: [
        {
          location: 'Pegasystems Intern Hackathon',
          role: '1st Place Winner',
          setting: 'Aug 2023',
        },
        {
          location: 'Berkeley ANova Hacks',
          role: 'Best Figma Design',
          setting: 'Mar 2021',
        },
        {
          location: 'Superposition Hackathon',
          role: 'Best Use of Figma',
          setting: 'Feb 2020',
        }
      ]
    },
    {
      id: 'skills',
      title: 'Skills',
      entries: [
        {
          location: 'Design + Research',
          bullets: [
            'UX/UI Design, Interaction Design, Prototyping, Branding, Wireframing, Design Systems, Visual Design, Information Architecture, Graphic Design, Motion Design, Storyboarding, Usability Testing, User Interviews, Journey Maps, A/B Testing, Surveys, Competitive Analysis, Personas, Heuristic Evaluation, Data Analysis'
          ]
        },
        {
          location: 'Web Development + Programming',
          bullets: [
            'HTML, CSS, JavaScript, ReactJS, Java, Python, Git, C++, C, Assembly, MatLab, Pandas, NumPy'
          ]
        },
        {
          location: 'Toolkit',
          bullets: [
            'Figma, Adobe XD, Photoshop, Illustrator, After Effects, Notion, VS Code, GitHub, Google Suite, Microsoft Suite'
          ]
        }
      ]
    }
  ]

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  const length = sections.entries.length;
  return (
    <main className="case-study resume">
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
        <div className="case-layout">
          <CaseAside
            sections={sections}
            onBack={handleBack}
            ariaLabel="About navigation"
          />
          <article className="cs-content">
            {sections.map(sec => (
              <section id={sec.id} key={sec.id}>
                <h2 className="resume-section-headline">{sec.title}</h2>
                <hr className="section-separator" />
                {Array.isArray(sec.entries) ? (
                  sec.entries.map((entry, i) => (
                    <div className="resume-entry" key={i}>
                      <div className="resume-entry-title">
                        {entry.location && <h3 className="entry-headline">{entry.location}</h3>}
                        {entry.role && <h4 className="entry-role">({entry.role})</h4>}
                      </div>
                      {entry.setting && <p className="resume-entry-setting">{entry.setting}</p>}
                      {Array.isArray(entry.bullets) && entry.bullets.length > 0 && (
                        <ul className="resume-entry-bullets">
                          {entry.bullets.map((b, j) => <li key={j}>{b}</li>)}
                        </ul>
                      )}
                      {i < sec.entries.length - 1 ? <hr className="section-separator" /> : ''}
                    </div>
                  ))
                ) : (
                  <div className="resume-entry">
                    {Array.isArray(sec.bullets) ? (
                      <ul className="resume-entry-bullets">
                        {sec.bullets.map((b, j) => <li key={j}>{b}</li>)}
                      </ul>
                    ) : (
                      <p>{sec.bullets}</p>
                    )}
                  </div>
                )}
              </section>
            ))}
          </article>
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
