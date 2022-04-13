import React from 'react'

const Column = ({ columnData }) => (
  <aside>
    <h3 className="text-cyan-700 subtitle is-4">{columnData.title}</h3>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: columnData.content }}
    />
  </aside>
)

export default Column
