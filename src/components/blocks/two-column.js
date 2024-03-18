import React from 'react'
import Column from './inc/column'

const TowColumn = ({ block, noImage }) => (
  <section className='md:py-10'>
      <div className="bg-white max-w-5xl mx-auto md:py-10  section shadow-none md:shadow-lg">
        {block.title && (
          <>
          {/* todo: fix has-text-centered */}
          <h2 className="text-cyan-700 flex justify-center">{block.title}</h2>
          <hr class="border-2 w-3/4 border-cyan-700 border-solid"/>
          </>
        )}
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center px-10 md:py-8">
          <div className=" flex justify-center">
            <Column columnData={block.col1}  noImage={noImage} />
          </div>
          <div className=" flex justify-center">
            <Column columnData={block.col2} noImage={noImage}/>
          </div>
      </div>
    </div>
  </section>
)

export default TowColumn
