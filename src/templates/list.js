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
        <section className='py-20 bg-gradient-to-br from-sky-400/50 via-rose-400/50 to-lime-400/50'>
        
          <div className="section box-shadow mx-auto pb-[6rem] pt-10 max-w-7xl bg-white">

            <div class="max-w-5xl mx-auto article-header has-text-centered">
              <h1 class="title is-1 text-cyan-700 text-3xl">{post.frontmatter.title}</h1>
            </div>
            <main className="max-w-5xl mx-auto content-container">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <hr />
              <PostList posts={childPosts} />
            </main>

          </div>
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
