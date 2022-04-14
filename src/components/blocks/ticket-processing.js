import React from 'react'

const TicketProcessing = ({ block }) => (
  <section
    className='flex w-[90%] mx-auto'
  >
      <h1>{block.title}</h1>
      <div>{block.widget_html}</div>
  </section>

  )

export default TicketProcessing