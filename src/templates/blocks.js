import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// import blocks
import Table from '../components/blocks/table'
import TowColumn from '../components/blocks/two-column'
import TextAndImage from '../components/blocks/text-and-image'
import TitleButton from '../components/blocks/title-button'
import Hero from '../components/blocks/hero'
import HomeHero from '../components/blocks/home-hero'
import TextArea from '../components/blocks/text-area'
import Image from '../components/blocks/image'
import Iframe from '../components/blocks/iframe'
import Gallery from '../components/blocks/gallery'
import Tag from '../components/blocks/tag'
import Button from '../components/blocks/button'
import Video from '../components/blocks/video'

import { getImage, GatsbyImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'


class BlocksTemplate extends React.Component {
// TODO: make this not show on other pages
  Initialize() {
    window.addEventListener("scroll", this.ToggleButtons)    
    document.getElementById("scroll-btn").addEventListener("click", this.ScrollToTop);
  }
  /* Displays/Hides the buttons */
  ToggleButtons() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      document.getElementById("scroll-btn").style.display = "block";      
    } else {
      document.getElementById("scroll-btn").style.display = "none";    
    }
  }
  ScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  GetTagBool(){
    var tag_page = false
    this.props.data.markdownRemark.frontmatter.blocks.forEach( function (block) {
      if (block.component === 'tag') {
          tag_page=true;
      }
    })
    return tag_page;
  }

  componentDidMount(){
    if (document.getElementById("scroll-btn") && this.GetTagBool() === true) {
    this.Initialize();
    }
  }

  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt
      
// for background img
      var front = post.frontmatter.blocks.find(function(block, index) {
          if(block.component === 'page_background_image') {
            return true;
          } else {
            return false
          }
        }) 
        const image = (block) => {
          return getImage(block)
        }
        const bgImage = (img) => {

          return convertToBgImage(img)
        }
  //  for table col imgs
  var noImage = (block) => { 
      if (block.col1.show_image === true || block.col1.show_image === true || block.col1.show_image === true){
        return true
      } else {
        return false
      }
    }

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />          
        {front ? (
          <BackgroundImage
            Tag="section"
            {...bgImage(image(front.page_background_image))}
            preserveStackingContext
            className='bg-scroll bg-no-repeat bg-center bg-cover py-20 '
          >
            <div className='min-h-[100vh]'>
            {
            post.frontmatter.blocks.map(block => {
            switch (block.component) {
              case 'table':
                return <Table block={block} noImage={noImage(block)}/>
              case 'two_column':
                return <TowColumn block={block} noImage={noImage(block)}/>
              case 'text_and_image':
                return <TextAndImage block={block} />
              case 'title_button':
                return <TitleButton block={block} />
              case 'hero':
                return <Hero block={block} />
              case 'home_hero':
                return <HomeHero block={block} />
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
              case 'video':
                return <Video block={block} />
              case 'tag':
                return <Tag block={block} />
              default:
                return ''
            }
          })
        }
            </div>

          </BackgroundImage>
        ):(
        // switch statmetn with the component name -> the hidden block 
        post.frontmatter.blocks.map(block => {
          switch (block.component) {
            case 'table':
              return <Table block={block} noImage={noImage(block)}/>
            case 'two_column':
              return <TowColumn block={block} noImage={noImage(block)}/>
            case 'text_and_image':
              return <TextAndImage block={block} />
            case 'title_button':
              return <TitleButton block={block} />
            case 'hero':
              return <Hero block={block} />
            case 'home_hero':
              return <HomeHero block={block} />
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
            case 'video':
              return <Video block={block} />
            case 'tag':
              return <Tag block={block} />
            default:
              return ''
          }
        })
        )}
        

        {/* up btn */}
        <div className={
          this.GetTagBool() === true
          ? 'block' 
          : 'none'
        }>
          <button id="scroll-btn" className="animate-bounce sidebar-btns scoll-btn-style">Scroll To Top</button>
        </div>
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
          alt
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
          text_center
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
            logo
            logo_url
            logo_name
          }
          url
          iframe_height
          orientation
          background
          image_center_width
          tag
          icon
          image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          page_background_image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
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
          home_logo_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          home_background_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                srcSet
              }
            }
          }
          button {
            url
            label
            button_type
          }
          col1 {
            show_image
            col_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  srcSet
                }
              }
            }
            alt
            title
            content
          }
          col2 {
            show_image
            col_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  srcSet
                }
              }
            }
            alt
            title
            content
          }
          col3 {
            show_image
            col_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  srcSet
                }
              }
            }
            alt
            title
            content
          }
        }
      }
    }
  }
`
