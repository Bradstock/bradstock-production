import React from 'react'
import ReactMarkdown from 'react-markdown'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Gallery = ({ block }) => (
  <section>                  
  <div className="bg-white w-full mx-auto py-12 px-4 max-w-[90%]">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4 "
          >
              {block.gallery_field_group.map((chunk)=> (
                <div>
                    <Zoom>
                      <div className='h-[20rem] w-[97%] mx-auto my-6' >
                        <img
                          alt={chunk.alt}
                          className="object-contain w-full h-full"
                          srcSet={chunk.gallery_image.childImageSharp.fluid.srcSet}
                          />
                        </div>
                      </Zoom>
                      <div className={
                        chunk.logo
                        ? 'block'
                        : 'hidden'
                      }>
                        <div className='flex justify-center'>
                            <a
                            className=
                                'text-md md:text-lg text-center content-center outline-none border-transparent text-white bg-cyan-600 border hover:border-solid hover:border-cyan-600  hover:text-cyan-600 hover:bg-white/50 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
                            href={chunk.logo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {chunk.logo_name}
                          </a>
                        </div>
                      </div>
                      <div className="leading-6 font-medium space-y-1 text-center ">
                        <ReactMarkdown children={chunk.image_info} allowDangerousHtml></ReactMarkdown>
                    </div>
                  </div>
            ))}
        </div>
    </div>
      
  </section>

  )

export default Gallery
