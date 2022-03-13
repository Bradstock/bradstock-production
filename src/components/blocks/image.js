import React from 'react'

const Image = ({ block }) => (

  <section
    className={
      block.position === 'Left' ? `w-1/4 h-auto ml-[15%] mr-4 mb-4 mt-10 float-left` :
      block.position === 'Right' ? `w-1/4 h-auto mr-[15%] ml-4 mb-4 mt-10 float-right` :
      block.position === 'Center' ? 
        block.image_center_width === '25%' ? `w-[25%] mx-auto my-4` :
        block.image_center_width === '50%' ? `w-[50%] mx-auto my-4` :
        block.image_center_width === '75%' ? `w-[75%] mx-auto my-4` : 
        `w-[50%] mx-auto my-4` : 
        `w-[50%] mx-auto my-4`
    }
  >
    {/* {console.log(block)} */}
      <img
        alt={block.alt}
        className="w-full h-full object-cover"
        srcSet={block.image.childImageSharp.fluid.srcSet}
        />
  </section>

  )

export default Image