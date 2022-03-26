import React from 'react'
import ReactMarkdown from 'react-markdown'

const Gallery = ({ block }) => (
  <section>
  {/* map */}

                  
  <div className="bg-white w-full mx-auto py-12 px-4 max-w-[90%]">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-3 xl:grid-cols-4 xl:gap-4 "
          >
              {block.gallery_field_group.map((chunk)=> (
                <div>
                  <h2>{chunk.title}</h2>
                    <img
                      alt={chunk.alt}
                      className="object-cover shadow-lg rounded-lg max-w-full"
                      srcSet={chunk.gallery_image.childImageSharp.fluid.srcSet}
                      />
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <ReactMarkdown children={chunk.image_info} allowDangerousHtml></ReactMarkdown>
                    </div>
                  </div>
            ))}
        </div>
    </div>
      
  </section>

  )

export default Gallery
