import React from 'react'

const Hero = ({ block }) => (
  <section
    className="relative z-0 -mt-[7.75rem] min-h-[35rem]"
  >
<div className="relative">
      <div className="absolute min-h-[35rem] inset-0">
        {block.background_image && (
              <img
                alt={block.title}
                className="w-full h-full object-cover"
                srcSet={block.background_image.childImageSharp.fluid.srcSet}
              />
        )}
        <div className="absolute inset-0 bg-stone-200 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-40 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold  text-white sm:text-5xl lg:text-6xl">{block.title}</h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
         {block.subtitle}
        </p>
      </div>
    </div>
  </section>
)

export default Hero
