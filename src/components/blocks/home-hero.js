import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'gatsby'


const HomeHero = ({ block }) => (
  <section
    className="relative z-0 -mt-[7.75rem] min-h-[36rem]"
  >
<div className="relative">
      {/* background */}
      <div className="absolute h-full min-h-[47rem] md:min-h-[36rem] inset-0 ">
        {block.home_background_image && (
              <img
                alt={block.title}
                className="w-full h-full object-cover"
                srcSet={block.home_background_image.childImageSharp.fluid.srcSet}
              />
        )}
        {/* bg pic overlay */}
        <div className="absolute inset-0 backdrop-saturate-50 bg-amber-50/70" aria-hidden="true" />

          {/* row cols */}
          <div className='absolute md:min-h-[26rem] inset-0 mt-[8rem] md:columns-2'>
              {/* col 1 image */}
              <div className="order-first md:order-last min-h-[13rem] sm:min-h-[15rem] md:min-h-[26rem] flex items-end md:items-center justify-center">
                  {block.home_logo_image && (
                    <img
                      className='h-40 sm:h-52 md:h-64 lg:h-72 xl:h-96'
                      alt={block.alt}
                      srcSet={block.home_logo_image.childImageSharp.fluid.srcSet}
                    />
                  )}
            </div>
            {/* col 2 text */}
            <div className="md:min-h-[26rem] text-center lg:text-left flex items-center justify-center">
              <div>

              <h1 className="text-4xl tracking-tight font-extrabold text-cyan-700 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                 {block.title}
              </h1>
              {/* <div className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"> */}
                <ReactMarkdown children={block.text_area}></ReactMarkdown>
              {/* </div> */}

              <div className=''>
              {
                block.button.button_type === 'Internal' ? (
                  <Link
                    to={block.button.url}
                    className=
                      'text-lg text-center content-center outline-none border-transparent text-white bg-cyan-600 border hover:border-solid hover:border-cyan-600 hover:text-cyan-600 hover:bg-white/50 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
                    >
                    {block.button.label} 
                  </Link> 
                ) : (
                  <a
                  className=
                      'text-lg text-center content-center outline-none border-transparent text-white bg-cyan-600 border hover:border-solid hover:border-cyan-600  hover:text-cyan-600 hover:bg-white/50 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
                  href={block.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {block.button.label}
                </a>
                  )
              } 
              </div>
            </div>

          </div>
        </div>
        {/* end row */}
      </div>
    </div>

  </section>
)

export default HomeHero
