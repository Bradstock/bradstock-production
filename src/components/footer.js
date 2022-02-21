import React from 'react'

const Footer = ({ content }) => (
  <footer className="flex justify-center mt-12 mb-24">
    <div className="max-w-5xl mx-auto" dangerouslySetInnerHTML={{__html: content}} />
  </footer>
)

export default Footer
