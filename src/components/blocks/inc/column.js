import React from 'react'

const Column = ({ columnData, noImage }) => (
  <div>
    {console.log(noImage)}
    
    <div className={
      noImage === true
      ? 'md:h-[20rem] w-[97%] mx-auto'
      : 'w-[97%] mx-auto'
    } 
      >
      <div className={
          columnData.show_image === true
          ? 'block h-[20rem]'
          : 'hidden'
        }>
      {columnData.col_image && (
        <img
          alt={columnData.alt}
          className="h-full w-full object-contain"
          srcSet={columnData.col_image.childImageSharp.fluid.srcSet}
          />
      )}
      </div>
    </div>

    <div className='mx-2 mb-4 md:mb-0'>
    <h3 className="">{columnData.title}</h3>
    <div
      className=""
      dangerouslySetInnerHTML={{ __html: columnData.content }}
    />
    </div>
  </div>
)

export default Column
