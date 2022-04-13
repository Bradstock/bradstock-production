import React from 'react'

const Footer = ({ content }) => (
  <footer className="flex justify-center pb-20 py-5 h-20 items-center">
    <div className="max-w-5xl mx-auto items-center text-center" dangerouslySetInnerHTML={{__html: content}} />
  </footer>
)

export default Footer
