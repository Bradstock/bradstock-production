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
      <div className="w-full mx-auto py-24 relative max-w-7xl float-left sm:w-5/6 sm:py-32 lg:w-1/2 lg:ml-16 lg:px-8 xl:w-1/3">
        <div className='w-full m-5 px-8 py-6 rounded-2xl bg-white/40 hero-shadow ' >
          <h1 className="text-4xl font-extrabold  text-gray-800 sm:text-5xl lg:text-6xl">
            {block.title}
          </h1>
          <p className="mt-6 text-gray-800 text-3xl font-semibold max-w-3xl">
          {block.subtitle}
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
