import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class SingleTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <section className='-mt-[5.375rem] pt-32 pb-20 bg-gradient-to-br from-sky-400/50 via-rose-400/50 to-lime-400/50'>
        
        <div className="section box-shadow mx-auto py-[6rem] bg-white max-w-7xl">
          <div className="max-w-5xl mx-auto article-header has-text-centered">
            <h1 className="text-cyan-700">{post.frontmatter.title}</h1>
            {post.frontmatter.date && (
              <p className="italic">
                {post.frontmatter.date}
              </p>
            )}
            <hr />
          </div>
            <main className="max-w-5xl mx-auto content-container">
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </main>
          </div>
        </section>
      </Layout>
    )
  }
}

export default SingleTemplate

export const pageQuery = graphql`
  query SinglePageBySlug($slug: String!) {
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
