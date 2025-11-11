import React from 'react'
import WorkCard from './WorkCard'

export default function WorkGrid({ items = [] }) {
  return (
    <div className="work-grid" role="list">
      {items.map(item => (
        <WorkCard key={item.id} item={item} />
      ))}
    </div>
  )
}
