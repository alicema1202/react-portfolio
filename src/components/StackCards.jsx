import React from 'react'

export default function NumberedInfoCards({ items = [] }) {
    if (!items.length) return null

    return (
        <div className="numbered-info-cards" role="list" aria-label="Numbered informational cards">
            {items.map((c, i) => (
                <div className="numbered-info-card" role="listitem" key={i}>

                    <div className="info-card-heading">
                        <h3 className="cs-subheading">
                            {c.number || i + 1}
                        </h3>
                        {c.title ? (
                            <h3 className="cs-subheading">
                                {c.title}
                            </h3>
                        ) : null}
                    </div>

                    {/* Description */}
                    {c.description ? (
                        <p>{c.description}</p>
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
