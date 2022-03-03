import React from 'react'

const TextAndImage = ({ block }) => (
  <section
    className={
      block.background
        ? `bg-${block.background}`
        : 'bg-white'
    }
  >
    <div className={
      block.orientation === 'Image Right'
      ? 'w-full flex flex-row-reverse'
      : 'w-full flex flex-row' 
    }
    >
      <div className='w-full sm:w-1/2 py-10 mx-20 flex justify-center content-center'>
          {block.tai_image && (
            <img
              className='max-w-full max-h-[30rem]'
              alt={block.title}
              srcSet={block.tai_image.childImageSharp.fluid.srcSet}
            />
          )}
      </div>
      <div className={
      block.orientation === 'Image Right'
      ? 'w-full sm:w-1/2 py-10 mx-20 text-right'
      : 'w-full sm:w-1/2 py-10 mx-20 text-left' 
    }
    >
          <h1 className=''>{block.title}</h1>
          <div className=''
            dangerouslySetInnerHTML={{ __html: block.content }}
          />
      </div>
    </div>
  </section>
)

export default TextAndImage
