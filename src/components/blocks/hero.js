import React from 'react'

const Hero = ({ block }) => (
  <section
    className="relative z-0 -mt-[7.75rem] min-h-[27rem]"
  >
<div className="relative">
      <div className="absolute min-h-[27rem] inset-0">
        {block.background_image && (
              <img
                alt={block.title}
                className="w-full h-full object-cover"
                srcSet={block.background_image.childImageSharp.fluid.srcSet}
              />
        )}
        <div className="absolute inset-0 bg-stone-200 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="my-auto max-h-[25rem] max-w-[100%] md:max-w-[80%] pt-20 py-[5%] lg:pl-[10%] mx-auto lg:mx-0 relative">
        <div className='mx-8 px-8 py-0 rounded-2xl bg-white/40 hero-shadow max-w-full lg:max-w-3xl' >
          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl lg:text-6xl">
            {block.title}
          </h1>
          {/* </div>
        <div className='mx-8 px-8 py-0 rounded-2xl bg-white/40 hero-shadow' > */}
          <p className="mt-6 text-gray-800 text-xl md:text-2xl lg:text-3xl font-semibold max-w-3xl">
          {block.subtitle}
          </p>
          </div>
        
      </div>
    </div>
  </section>
)

export default Hero
