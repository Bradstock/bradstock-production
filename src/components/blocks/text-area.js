import React from 'react'
import ReactMarkdown from 'react-markdown'


const TextArea = ({ block }) => (
  <section>
      <div className="max-w-5xl mx-auto my-10">
      <ReactMarkdown children={block.text_area} 
      components={{img:({node,...props})=><img className='w-[60%] h-auto ml-4 mr-4 mb-4 mt-10'{...props}/>}}
      ></ReactMarkdown>
      </div>
  </section>
)

export default TextArea