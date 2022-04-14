import React from 'react'
import ReactMarkdown from 'react-markdown'

const Gallery = ({ block }) => (
  <section>
  {console.log(block)}

                  
  <div className="bg-white w-full mx-auto py-12 px-4 max-w-[90%]">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4 "
          >
              {block.gallery_field_group.map((chunk)=> (
                <div>
                  <div className='h-[20rem] w-[97%] mx-auto'>
                    <img
                      alt={chunk.alt}
                      className="object-contain w-full h-full"
                      srcSet={chunk.gallery_image.childImageSharp.fluid.srcSet}
                      />
                      </div>
                      <div className={
                        chunk.logo
                        ? 'block'
                        : 'hidden'
                      }>
                        <div className='text-center text-cyan-700 hover:text-teal-400'>
                          <ReactMarkdown children={chunk.logo_brand} allowDangerousHtml>

                          </ReactMarkdown>
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
