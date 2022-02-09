import React from 'react'

const Hero = ({ block }) => (
  <section
    className={
      block.background
        ? `hero is-medium has-text-centered is-${block.background}`
        : 'hero is-medium has-text-centered'
    }
  >

<div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={block.background_image}
          alt=""
        />
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{block.title}</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
        {block.subtitle}
        </p>
      </div>
    </div>

    <div className="hero-body">
      <div className="container">
        <h1 className="title is-1">{block.title}</h1>
        {block.subtitle && <p className="subtitle is-4">{block.subtitle}</p>}
      </div>
    </div>
  </section>
)

export default Hero
