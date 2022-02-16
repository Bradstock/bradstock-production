import React from 'react'
// import ReactMarkdown from 'react-markdown'

const Button = ({ block }) => (
  <section>
      <div className="w-full mx-auto float-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={
            block.background &&
            (block.background === 'primary' || block.background === 'dark')
              ? 'button is-primary is-large is-inverted is-outlined'
              : 'button is-primary is-large'
          }
          href={block.button.url}
        >
          {block.button.label}
        </a>
      </div>
  </section>
)

export default Button