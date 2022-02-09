import React from 'react'

const Footer = ({ content }) => (
  <footer className="section site-footer">
    <div className="max-w-5xl mx-auto has-text-centered" dangerouslySetInnerHTML={{__html: content}} />
  </footer>
)

export default Footer
