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
        <div style={{display: 'flex', width: '100%', gap: '16px', marginBottom: '24px', alignItems: 'center'}}>
          <h2 id={`${sectionId}-title`} style={{textWrap: 'nowrap', marginBottom: '0'}}>{title}</h2>
          <hr className='section-separator' style={{width: '100%'}}></hr>
        </div>
        <WorkGrid items={items} variant={gridVariant} />
      </div>
    </section>
  )
}
