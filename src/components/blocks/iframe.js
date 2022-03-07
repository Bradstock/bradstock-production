import React from 'react'

const Iframe = ({ block }) => (
  <section
    className='flex justify-center'
  >
        <iframe 
        title='iframe block'
        src={block.url}
        width="80%" 
        height={block.iframe_height}
        frameborder="0" 
        marginHeight="0" 
        marginWidth="0"
        className='my-4'
        >
            Browser not compatible. Use this <a href={block.url} target="blank">Link </a> instead.
        </iframe>
  </section>

  )

export default Iframe

