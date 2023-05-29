import React from 'react'
import ReactMarkdown from 'react-markdown'

// TODO: fix responsive
const TextArea = ({ block }) => (
  <section>
      <div className="my-10 w-[90%] md:w-80% mx-auto lg:max-w-5xl">
        <div className={
          block.text_center === true 
          ? 'text-center' 
          : ''
        }>
          <ReactMarkdown children={block.text_area} 
          components={
            {img:({node,...props})=><img className='w-[60%] h-auto ml-4 mr-4 mb-4 mt-10' {...props} alt=''/>}
          }
          ></ReactMarkdown>
        </div>
      </div>
  </section>
)

export default TextArea