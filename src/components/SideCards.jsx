import React from 'react'

export default function SideCards({ items = [] }) {
    if (!items.length) return null

    return (
        <div className="side numbered-info-cards" role="list" aria-label="Numbered informational cards">
            {items.map((c, i) => (
                <div className="side info-card" role="listitem" key={i}>
                    
                    <div className="info-card-heading">
                        <h3 className="cs-subheading">
                            {c.number || i + 1}.
                        </h3>
                        {c.title ? (
                            <h3 className="cs-subheading">
                                {c.title}
                            </h3>
                        ) : null}
                    </div>

                    {/* Description */}
                    {c.description ? (
                        Array.isArray(c.description) ? (
                            <ul>
                                {c.description.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>{c.description}</p>
                        )
                    ) : null}

                    {c.image ? (
                        <img
                            src={c.image}
                            alt={c.title || `Card image ${i + 1}`}
                            className="numbered-info-card-image"
                        />
                    ) : null}

                </div>
            ))}
        </div>
    )
}
