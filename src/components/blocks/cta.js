import React from 'react'

const CTA = ({ block }) => (
  <section
    className={
      block.background
        ? `container w-screen my-4 is-medium flex justify-center bg-${block.background}`
        : 'container w-screen my-4" is-medium flex justify-center'
    }
  >
      <div className="max-w-5xl mx-auto my-8 ">
        <h2 className="title is-2">{block.title}</h2>
        {block.subtitle && <p className="subtitle">{block.subtitle}</p>}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={
            block.background &&
            (block.background === 'primary' || block.background === 'dark')
            ? 'outline-none text-green-700 bg-transparent border border-solid border-green-700 hover:bg-green-700 hover:text-white active:bg-green-700 font-bold uppercase px-10 py-4 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            : 'outline-none border-transparent text-white bg-green-700 border hover:border-solid hover:border-green-700 hover:bg-transparent hover:text-green-700 active:bg-transparent font-bold uppercase px-10 py-4 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          }
          href={block.button.url}
        >
          {block.button.text}
        </a>
    </div>
  </section>
)

export default CTA
