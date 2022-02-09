import React from 'react'

import Column from './inc/column'

const ThreeCol = ({ block }) => (
  <section className="block-3col hero is-medium">
    <div className="">
      <div className="max-w-5xl mx-auto section box-shadow">
        {block.title && (
          <>
          {/* todo: fix has-text-centered */}
          <h2 className="title is-3 has-text-centered">{block.title}</h2>
          <hr />
          </>
        )}
        <div className="columns">
          <div className="column">
            <Column columnData={block.col1} />
          </div>
          <div className="column">
            <Column columnData={block.col2} />
          </div>
          <div className="column">
            <Column columnData={block.col3} />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default ThreeCol
