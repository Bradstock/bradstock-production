import React from 'react'

const Video = ({ block }) => (
  <section
    className='flex justify-center'
  >
        {console.log(block.url)}
      {
            block.orientation === 'Horizontal' ? (
                <div class="aspect-w-16 aspect-h-6 w-[60%]">
                {/* <iframe 
                title={block.title}
                src={block.url}
                frameBorder="0" 
                width='560'
                height='315'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >
                    Browser not compatible. Use this <a href={block.url} target="blank">Link </a> instead.
                </iframe> */}
                <iframe width="560" height="315" src="https://www.facebook.com/100000659407524/videos/3540727289292550/" title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            ) : (
                <div class="aspect-w-9 aspect-h-16 w-[40%]">
                <iframe 
                title='video block'
                src={block.url}
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                // data-allow="autoplay; encrypted-media" 
                allowFullScreen
                >
                    Browser not compatible. Use this <a href={block.url} target="blank">Link </a> instead.
                </iframe> 
                
                </div>
            )
      }
        
  </section>
  )

export default Video

