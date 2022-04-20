import React from 'react'
import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'


const PBI = ({ block }) => 
{ 
    const image = getImage(block.background_image)

    // Use like this:
    const bgImage = convertToBgImage(image)
  
    return (
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        {...bgImage}
        preserveStackingContext
      >
        <div style={{minHeight: 1000, minWidth: 1000}}>
          <GatsbyImage image={image} alt={"testimage"}/>
        </div>
      </BackgroundImage>
    )
     
//     // return (
//     // <div  className='w-full h-full bg-no-repeat bg-cover'>
//     // {block.background_image && (
//     //     <img
//     //       alt={block.title}
//     //       className="w-full h-full object-cover"
//     //       srcSet={block.background_image.childImageSharp.fluid.srcSet}
//     //     />
//     // )}
//     //  </div>
    // )

}

  
  export default PBI