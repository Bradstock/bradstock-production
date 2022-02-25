import React from 'react'
// import ReactMarkdown from 'react-markdown'
import { Link } from 'gatsby'


const Button = ({ block }) => (
  <section>
      <div className="w-full flex justify-center float-center">
      {
        block.button_type === 'Internal' ? (
          <Link
            to={block.button.url}
            className={
              block.background &&
              (block.background === 'primary' || block.background === 'dark')
              ? 'text-lg text-center content-center outline-none text-green-700 bg-transparent border border-solid border-green-700 hover:bg-green-700 hover:text-white active:bg-green-700 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
              : 'text-lg text-center content-center outline-none border-transparent text-white bg-green-700 border hover:border-solid hover:border-green-700 hover:bg-transparent hover:text-green-700 active:bg-transparent font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
            }
            >
            {block.button.label} 
          </Link> 
        ) : (
          <a
          className={
            block.background &&
            (block.background === 'primary' || block.background === 'dark')
            ? 'text-lg text-center content-center outline-none text-green-700 bg-transparent border border-solid border-green-700 hover:bg-green-700 hover:text-white active:bg-green-700 font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
            : 'text-lg text-center content-center outline-none border-transparent text-white bg-green-700 border hover:border-solid hover:border-green-700 hover:bg-transparent hover:text-green-700 active:bg-transparent font-bold uppercase px-10 py-4 rounded focus:outline-none ease-linear transition-all duration-150'
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