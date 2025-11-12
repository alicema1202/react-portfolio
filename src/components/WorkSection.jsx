import React from 'react'
import WorkGrid from './WorkGrid'
import { selectWork, otherWork } from '../data/work'

export default function WorkSection({ variant, title, maxItems }) {
  const isSelected = variant === 'select'
  const defaultMax = isSelected ? 4 : 6
  const limit = maxItems || defaultMax
  const items = isSelected ? selectWork.slice(0, limit) : otherWork.slice(0, limit)
  const sectionId = isSelected ? 'selected-work' : 'other-work'
  const gridVariant = isSelected ? 'selected' : 'other'

  return (
    <section id={sectionId} className="work-section" aria-labelledby={`${sectionId}-title`}>
      <div className="container">
        <h2 id={`${sectionId}-title`}>{title}</h2>
        <WorkGrid items={items} variant={gridVariant} />
      </div>
    </section>
  )
}
