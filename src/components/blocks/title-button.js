import React from 'react'

const TitleButton = ({ block }) => (
  <section
    className={
      block.background
        ? `bg-${block.background}`
        : 'bg-white'
    }
  >
      <div className="items-center content-center mx-auto py-10 my-4">
        <h2 className="flex justify-center">{block.title}</h2>
        {block.subtitle && <p className="flex justify-center">{block.subtitle}</p>}
      <div className="w-full flex justify-center float-center">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={
            block.background &&
            (block.background === 'primary' || block.background === 'dark')
            ? 'text-lg text-center content-center outline-none text-green-700 bg-transparent border border-solid border-green-700 hover:bg-green-700 hover:text-white active:bg-green-700 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
            : 'text-lg text-center content-center outline-none border-transparent text-white bg-green-700 border hover:border-solid hover:border-green-700 hover:bg-transparent hover:text-green-700 active:bg-transparent font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
          }
          href={block.button.url}
        >
          {block.button.text}
        </a>
        </div>
    </div>
  </section>
)

export default TitleButton
