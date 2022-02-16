import React from 'react'

const Iframe = ({ block }) => (
  <section
    className=''
  >
        <iframe 
        src={block.url}
        width="80%" 
        height="800"
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        className='mx-auto my-4'
        >
            Browser not compatible. Use this <a href={block.url} target="blank">Link </a> instead.
        </iframe>
  </section>

  )

export default Iframe

