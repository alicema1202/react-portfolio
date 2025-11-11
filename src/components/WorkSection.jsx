import React from 'react'
import WorkGrid from './WorkGrid'
import { selectWork, otherWork } from '../data/work'

export default function WorkSection({ variant, title, maxItems }) {
  const items = variant === 'select' ? selectWork.slice(0, maxItems) : otherWork.slice(0, maxItems)
  const sectionId = variant === 'select' ? 'selected-work' : 'other-work'

  return (
    <section id={sectionId} className="work-section" aria-labelledby={`${sectionId}-title`}>
      <div className="container">
        <h2 id={`${sectionId}-title`}>{title}</h2>
        <WorkGrid items={items} />
      </div>
    </section>
  )
}
