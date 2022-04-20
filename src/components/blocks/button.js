import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { Link } from 'gatsby'


const Button = ({ block }) => (
  <section>
      <div className="w-full flex justify-center float-center">
      {
        block.button.button_type === 'Internal' ? (
          <Link
            to={block.button.url}
            className={
              block.background &&
              (block.background === 'transparent' || block.background === 'primary')
              ? 'text-lg text-center content-center outline-none text-cyan-600 bg-transparent border border-solid border-cyan-600 hover:bg-cyan-600 hover:text-white active:bg-cyan-600 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
              : 'text-lg text-center content-center outline-none border-transparent text-white bg-cyan-600 border hover:border-solid hover:border-cyan-600 hover:bg-transparent hover:text-cyan-600 active:bg-transparent font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
            }
            >
            {block.button.label} 
          </Link> 
        ) : (
          <a
          className={
            block.background &&
            (block.background === 'transparent' || block.background === 'primary')
            ? 'text-lg text-center content-center outline-none text-cyan-600 bg-transparent border border-solid border-cyan-600 hover:bg-cyan-600 hover:text-white active:bg-cyan-600 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
            : 'text-lg text-center content-center outline-none border-transparent text-white bg-cyan-600 border hover:border-solid hover:border-cyan-600 hover:bg-transparent hover:text-cyan-600 active:bg-transparent font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
          }
          href={block.button.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {block.button.label}
        </a>
          )
      } 
      </div>
  </section>
)

export default Button