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
}

  
  export default PBI