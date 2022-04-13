import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ posts }) => (
  <section className="post-list">
    {posts.map(({ node }) => (
      <div key={node.fields.slug} className="post box">
        <h2 className="subtitle pt-8 text-cyan-700">
          {node.frontmatter.title}
        </h2>
        <p className="is-size-6">{node.frontmatter.date}</p>
        <p>
          <em className="">{node.excerpt}</em>
        </p>
        <Link className='text-cyan-700 hover:text-teal-400' to={node.fields.slug}>Read More &raquo;</Link>
      </div>
    ))}
  </section>
)

export default PostList
