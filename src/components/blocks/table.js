import React from 'react'
import Column from './inc/column'

const Table = ({ block, noImage }) => (
  <section>
      <div className="max-w-5xl mx-auto py-10 my-8 section box-shadow">
        {block.title && (
          <>
          {/* todo: fix has-text-centered */}
          <h2 className="text-cyan-700 flex justify-center">{block.title}</h2>
          <hr class="border-2 w-3/4 border-cyan-700 border-solid"/>
          </>
        )}
    <div className="flex flex-row justify-center px-10 py-8">
          <div className="basis-1/3 flex justify-center">
            <Column columnData={block.col1}  noImage={noImage} />
          </div>
          <div className="basis-1/3 flex justify-center">
            <Column columnData={block.col2} noImage={noImage}/>
          </div>
          <div className="basis-1/3 flex justify-center">
            <Column columnData={block.col3}  noImage={noImage}/>
          </div>
      </div>
    </div>
  </section>
)

export default Table
