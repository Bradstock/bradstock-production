import React from 'react'
import ReactMarkdown from 'react-markdown'

const TextAndImage = ({ block }) => (
  // TODO: fix responsivness
  <section className='my-12'>
    {
      block.icon === true ? (
        <div className='w-[90%] md:w-[70%] lg:w-[60%] lg:max-w-[60%] xl:max-w-[70%] mx-auto'>
          <div className='w-full block text-center'>
            {block.tai_image && (
              <img
                className='w-auto h-32 md:h-44'
                alt={block.title}
                srcSet={block.tai_image.childImageSharp.fluid.srcSet}
              />
            )}
          </div>
          <h2 className='text-cyan-700 w-full block text-center'>{block.title}</h2>
          <div className={
            block.text_center === true ?
              'text-center' :
              'text-left'
          }
          // dangerouslySetInnerHTML={{ __html: block.content }}
          />
          <ReactMarkdown children={block.content}
            components={
              { img: ({ node, ...props }) => <img className='w-[60%] h-auto ml-4 mr-4 mb-4 mt-10' {...props} alt='' /> }
            }
          ></ReactMarkdown>
        </div>
      ) : (
        <div className={
          block.background
            ?
            (
              block.background === 'primary' ? 'bg-primary  max-w-full lg:max-w-[90%] xl:max-w-[70%] mx-auto' :
                block.background === 'light' ? 'bg-light  max-w-full lg:max-w-[90%] xl:max-w-[70%] mx-auto' :
                  block.background === 'dark' ? 'bg-dark  max-w-full lg:max-w-[90%] xl:max-w-[70%] mx-auto'
                    : 'bg-transparent  max-w-full lg:max-w-[90%] xl:max-w-[70%] mx-auto'
            )
            : 'bg-white  max-w-full lg:max-w-[90%] xl:max-w-[70%] mx-auto'
        }
        >
          <div className={
            block.orientation === 'Image Right'
              ? 'w-full flex flex-col lg:flex-row-reverse'
              : 'w-full flex flex-col lg:flex-row'
          }
          >
            <div className='w-full flex justify-center content-center'>
              {block.tai_image && (
                <img
                  className='object-cover hover:object-scale-down w-full h-[20rem] md:h-[30rem]'
                  alt={block.title}
                  srcSet={block.tai_image.childImageSharp.fluid.srcSet}
                />
              )}
            </div>
            <div className={
              block.orientation === 'Image Right'
                ? 'w-[90%] py-4 text-right px[5%]'
                : 'w-[90%] py-4 text-left px-[5%]'
            }
            >
              <h2 className='text-cyan-700'>{block.title}</h2>
              <ReactMarkdown children={block.content}
                components={
                  { img: ({ node, ...props }) => <img className='w-[60%] h-auto ml-4 mr-4 mb-4 mt-10' {...props} alt='' /> }
                }
              ></ReactMarkdown>
            </div>
          </div>
        </div>

      )
    }
  </section>
)

export default TextAndImage
