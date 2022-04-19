import React from 'react'

const PBI = ({ block }) => (
 
    <section>
    {console.log(block)}
    {block.background_image && (
      <div 
      alt='background'
      style={`background-image: url(${block.background_image.childImageSharp.fluid.srcSet};)`}
      className='w-full h-full bg-no-repeat bg-cover'
      ></div>
      )}
    </section>
  )
  
  export default PBI