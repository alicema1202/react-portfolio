import React from 'react'
import WorkCard from './WorkCard'

export default function WorkGrid({ items = [], variant }) {
  const base = 'work-grid'
  const variantClass = variant === 'selected' ? 'work-grid--selected' : variant === 'other' ? 'work-grid--other' : ''
  const className = [base, variantClass].filter(Boolean).join(' ')
  return (
    <div className={className} role="list">
      {items.map(item => (
        <WorkCard key={item.id} item={item} />
      ))}
    </div>
  )
}
