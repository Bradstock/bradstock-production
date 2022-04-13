import React from 'react'

const Column = ({ columnData }) => (
  <aside>
    {console.log(columnData)}
    <div className='w-[50%] mx-auto my-4'>
    {columnData.col_image && (
      <img
        alt={columnData.alt}
        className="w-full h-full object-cover"
        srcSet={columnData.col_image.childImageSharp.fluid.srcSet}
        />
    )}
        </div>
    <h3 className="subtitle is-4">{columnData.title}</h3>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: columnData.content }}
    />
  </aside>
)

export default Column
