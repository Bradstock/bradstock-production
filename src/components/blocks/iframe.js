import React from 'react'

const Iframe = ({ block }) => (
  <section
    className='flex justify-center'
  >
        <iframe 
        src={block.url}
        width="80%" 
        height={block.iframe_height}
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        className='my-4'
        >
            Browser not compatible. Use this <a href={block.url} target="blank">Link </a> instead.
        </iframe>
  </section>

  )

export default Iframe

