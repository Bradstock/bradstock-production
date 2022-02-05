import React from 'react'
import { Link } from 'gatsby'

const PostList = ({ posts }) => (
  <section className="post-list">
    {posts.map(({ node }) => (
      <div key={node.fields.slug} className="post box">
        <h2 className="subtitle is-3 is-marginless">
          {node.frontmatter.title}
        </h2>
        <p class="is-size-6">{node.frontmatter.date}</p>
        <p>
          <em class="">{node.excerpt}</em>
        </p>
        <Link to={node.fields.slug}>Read More &raquo;</Link>
      </div>
    ))}
  </section>
)

export default PostList
