import React from 'react'

const Video = ({ block }) => (
  <section
    className='flex justify-center'
  >
      {
         block.orientation === 'Horizontal' ? (
            <iframe 
            src={block.url}
            width="60%" 
            height='auto'
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            className='my-4'
            >
                Browser not compatible. Use this <a href={block.url} target="blank">Link </a> instead.
            </iframe>
         ) : (
            <iframe 
            src={block.url}
            width="40%" 
            height='auto'
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            className='my-4'
            >
                Browser not compatible. Use this <a href={block.url} target="blank">Link </a> instead.
            </iframe> 
         )
           

      }
        
  </section>
  )

export default Video

