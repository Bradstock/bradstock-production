import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import Table from '../components/blocks/table'
import TextAndImage from '../components/blocks/text-and-image'
import TitleButton from '../components/blocks/title-button'
import Hero from '../components/blocks/hero'
import TextArea from '../components/blocks/text-area'
import Image from '../components/blocks/image'
import Iframe from '../components/blocks/iframe'
import Gallery from '../components/blocks/gallery'
import Button from '../components/blocks/button'


// test
class BlocksTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
    console.log(this.props)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        {/* switch statmetn with the component name -> the hidden block */}
        {post.frontmatter.blocks.map(block => {
          switch (block.component) {
            case 'table':
              return <Table block={block} />
            case 'text-and-image':
              return <TextAndImage block={block} />
            case 'title_button':
              return <TitleButton block={block} />
            case 'hero':
              return <Hero block={block} />
            case 'text_area':
              return <TextArea block={block} />
            case 'iframe':
              return <Iframe block={block} />
            case 'image':
              return <Image block={block} />
            case 'button':
              return <Button block={block} />
            case 'gallery':
              return <Gallery block={block} />
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
          position
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
          text_area
          gallery_field_group {
            gallery_image{
              childImageSharp {
                fluid(maxWidth: 800) {
                  srcSet
                }
              }
            }
            alt
            image_info
          }
          url
          iframe_height
          orientation
          background
          background_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          tai_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          button {
            url
            label
          }
          button_type
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
