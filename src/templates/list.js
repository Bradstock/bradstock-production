import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import PostList from '../components/post-list'

class ListTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    const childPosts = this.props.pageContext.children

    return (
      // TO DO: add blue bg to back of journal
      <Layout location={this.props.location} title={siteTitle} >
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section className="section box-shadow mx-auto pb-[6rem] pt-20 bg-white max-w-7xl">
          <div class="max-w-5xl mx-auto  article-header has-text-centered">
            <h1 class="title is-1">{post.frontmatter.title}</h1>
            <hr />
          </div>
          <main className="max-w-5xl mx-auto  content-container">
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <hr />
            <PostList posts={childPosts} />
          </main>
        </section>
      </Layout>
    )
  }
}

export default ListTemplate

export const pageQuery = graphql`
  query ListPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
