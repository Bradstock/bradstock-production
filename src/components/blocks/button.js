import React from 'react'
// import ReactMarkdown from 'react-markdown'

const Button = ({ block }) => (
  <section>
      <div className="w-full flex justify-center float-center">
        <button
          target="_blank"
          rel="noopener noreferrer"
          className={
            block.background &&
            (block.background === 'primary' || block.background === 'dark')
            (block.background === 'primary' || block.background === 'dark')
            ? 'text-lg text-center content-center outline-none text-green-700 bg-transparent border border-solid border-green-700 hover:bg-green-700 hover:text-white active:bg-green-700 font-bold uppercase px-16 py-5 rounded focus:outline-none ease-linear transition-all duration-150'
            : 'text-lg text-center content-center outline-none border-transparent text-white bg-green-700 border hover:border-solid hover:border-green-700 hover:bg-transparent hover:text-green-700 active:bg-transparent font-bold uppercase px-16 py-5 rounded focus:outline-none ease-linear transition-all duration-150'
          }
          href={block.button.url}
        >
          {block.button.label}
        </button>
      </div>
  </section>
)

export default Button