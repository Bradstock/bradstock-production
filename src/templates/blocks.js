import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import ThreeCol from '../components/blocks/3col'
import Feature from '../components/blocks/feature'
import Cta from '../components/blocks/cta'
import Hero from '../components/blocks/hero'
import TextArea from '../components/blocks/text-area'
import Image from '../components/blocks/image'
import Iframe from '../components/blocks/iframe'
import Button from '../components/blocks/button'



class BlocksTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    // console.log(this.props)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        {post.frontmatter.blocks.map(block => {
          switch (block.component) {
            case '3col':
              return <ThreeCol block={block} />
            case 'feature':
              return <Feature block={block} />
            case 'cta':
              return <Cta block={block} />
            case 'hero':
              return <Hero block={block} />
            case 'textarea':
              return <TextArea block={block} />
            case 'iframe':
              return <Iframe block={block} />
            case 'Image':
              return <Image block={block} />
            case 'Button':
              return <Button block={block} />
            default:
              return ''
          }
        })}
      </Layout>
    )
  }
}

export default BlocksTemplate

export const pageQuery = graphql`
  query BlockPageBySlug($slug: String!) {
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
        blocks {
          component
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          title
          subtitle
          content
          orientation
          background
          text_area
          background_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          feature_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          button {
            url
            text
          }
          col1 {
            title
            content
          }
          col2 {
            title
            content
          }
          col3 {
            title
            content
          }
        }
      }
    }
  }
`
