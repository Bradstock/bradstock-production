import React from 'react'

const Image = ({ block }) => (
  <section
    className={
      block.position === 'Left' ? `w-1/4 h-auto mr-4 my-4 float-left` :
      block.position === 'Right' ? `w-1/4 h-auto ml-4 my-4 float-right` :
      `w-[80%] x-auto my-4`
    }
  >
      <img
        alt={block.alt}
        className="w-full h-full object-cover"
        srcSet={block.image.childImageSharp.fluid.srcSet}
        />
  </section>

  )

export default Image