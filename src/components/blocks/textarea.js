import React from 'react'
import ReactMarkdown from 'react-markdown'

const TextArea = ({ block }) => (
  <section>
      <div className="max-w-5xl">
      <ReactMarkdown children={block.text_area} allowDangerousHtml />
      </div>
  </section>
)

export default TextArea