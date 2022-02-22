import React from 'react'

import Column from './inc/column'

const ThreeCol = ({ block }) => (
  <section>
      <div className="max-w-5xl mx-auto py-10 my-8 section box-shadow">
        {block.title && (
          <>
          {/* todo: fix has-text-centered */}
          <h2 className="flex justify-center">{block.title}</h2>
          <hr class="border-1 w-3/4 border-gray-100"/>
          </>
        )}
    <div className="flex flex-row justify-center px-10 py-8">
          <div className="basis-1/3 flex justify-center">
            <Column columnData={block.col1} />
          </div>
          <div className="basis-1/3 flex justify-center">
            <Column columnData={block.col2} />
          </div>
          <div className="basis-1/3 flex justify-center">
            <Column columnData={block.col3} />
          </div>
      </div>
    </div>
  </section>
)

export default ThreeCol
