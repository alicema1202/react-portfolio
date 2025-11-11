import React from 'react'
import { Link } from 'react-router-dom'

export default function WorkCard({ item }) {
  return (
    <article className="work-card" role="listitem">
      <Link to={`/case/${item.id}`} className="card-link" aria-label={`${item.title} case study`}>
        <div className="thumb" aria-hidden="true">
          <span className="thumb-inner">{item.image ? <img src={item.image} alt="" /> : item.initials}</span>
        </div>
        <div className="card-body">
          <h3>{item.title}</h3>
          <p className="summary">{item.summary}</p>
          <ul className="tags" aria-label="Tags">
            {item.tags.map(t => <li key={t}>{t}</li>)}
          </ul>
        </div>
      </Link>
    </article>
  )
}
