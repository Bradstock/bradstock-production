import React from 'react'
import ReactMarkdown from 'react-markdown'


const TextArea = ({ block }) => (
  <section>
      <div className="max-w-5xl mx-auto my-10">
      <ReactMarkdown children={block.text_area} allowDangerousHtml></ReactMarkdown>
      </div>
  </section>
)

export default TextArea