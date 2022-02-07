import React from 'react'

const TextArea = ({ block }) => (
  <section
    className={
      block.background
        ? `hero is-medium has-text-centered is-${block.background}`
        : 'hero is-medium has-text-centered'
    }
  >
    <div className="hero-body">
      <div className="max-w-5xl">
        <h1 className="title is-1">{block.title}</h1>
        {block.subtitle && <p className="subtitle is-4">{block.subtitle}</p>}
      </div>
    </div>
  </section>
)

export default TextArea