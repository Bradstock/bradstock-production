import React from 'react'
import { Link } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons'
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'


class Menu extends React.Component {

render() {
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    return (
      <Popover className="relative">
          <>
          <div className="absolute top-2 ml-5 ">
            <Popover.Button
              className={classNames(
                // open ? 'text-gray-900' : 'text-gray-500',
                'border-none focus:outline-none bg-transparent rounded-md inline-flex items-center text-base text-white link-hover font-medium hover:text-gray-400 group-hover:text-white hover:underline'
              )}
            >
              <span>MENU</span>
              <ChevronDownIcon
                className={classNames(
                  // open ? 'text-gray-600' : 'text-gray-400',
                  'ml-2 h-5 w-5'
                )}
                aria-hidden="true"
              />
            </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute min-h-[35rem] bg-white top-0 inset-x-0 z-10 shadow-lg box-border" >
                  <div className='max-w-[135rem] mx-[.5%] sm:mx-[5%] md:mx-[16%]'>
                    <div className='grid mx-4 my-6 sm:mx-6 md:mx-20 '>
                    {/* ROW 1 */}
                      <div className='grid grid-cols-2'>
                        <div className='flex justify-start items-center hover:text-green-200'>
                        <span className='text-2xl items-top mr-2'>&#10005;</span> CLOSE
                        </div>
                        <div className='flex justify-start'>
                        <a
                          href="https://www.facebook.com/BradstockFest/"
                          target="_blank"
                          rel="noreferrer"
                          className='mx-2'
                        >
                        <FontAwesomeIcon className='text-gray-600 hover:text-gray-400' icon={faFacebook} size="2x" />
                        </a>
                        <a
                          href="mailto:someone@example.com"
                          target="_blank"
                          rel="noreferrer"
                          className='mx-2'
                          >
                        <FontAwesomeIcon className='text-gray-600 hover:text-gray-400' icon={faEnvelope} size="2x" />
                        </a>
                        </div>

                      </div>
                      {/* ROW 2 */}
                      <div className='grid grid-cols-2 my-8'>
                        {/* col 1 colors */}
                        <div>
                        {this.props.sub1.edges.map(edge => {
                          return edge.node.type === 'internal' ? (
                              <Link
                                key={edge.node.id}
                                to={edge.node.url}
                                className={`${edge.node.text_color} font-semibold list-item list-none text-5xl leading-[4.2rem] hover:text-green-300 hover:underline w-3/4`}
                              >
                                {edge.node.title} 
                              </Link> 
                            ) : (
                              <a
                                key={edge.node.id}
                                className={`${edge.node.text_color} font-semibold list-item list-none text-5xl leading-[4.2rem] hover:text-green-300 hover:underline`}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={edge.node.url}
                              >
                                {edge.node.title}
                              </a>
                            )    
                          })}
                        </div>
                        {/* cols2  */}
                        <div className=''>
                        {this.props.sub2.edges.map(edge => {
                          return edge.node.type === 'internal' ? (
                             edge.node.url.includes('#') ? (
                              <AnchorLink 
                              to={edge.node.url} 
                              title={edge.node.title} 
                              className="list-item list-none text-4xl leading-[3rem] text-orange-300 hover:text-indigo-300 hover:underline mx-2 my-2 font-medium"
                              
                              />
                             ) : (
                              <Link
                                key={edge.node.id}
                                to={edge.node.url}
                                className="list-item list-none text-4xl leading-[3rem] text-orange-300 hover:text-indigo-300 hover:underline mx-2 my-2 font-medium"
                              >
                                {edge.node.title} 
                              </Link> 
                              )
                          ) : (
                            <a
                              key={edge.node.id}
                              className= "list-item list-none text-4xl leading-[3rem] text-orange-300 hover:text-indigo-300 hover:underline mx-2 my-2 font-medium "
                              target="_blank"
                              rel="noopener noreferrer"
                              href={edge.node.url}
                            >
                              {edge.node.title}
                            </a>
                          )    
                        })}

                        </div>
                      </div>

                      {/* ROW 3 */}
                        <div className="justify-start my-4">
                          {this.props.mainMenu.edges.map(edge => {
                            return edge.node.type === 'internal' ? (
                                <a
                                  key={edge.node.id}
                                  to={edge.node.url}
                                  className="whitespace-nowrap text-2xl mx-2 text-gray-500 hover:text-gray-300 hover:underline"
                                >
                                  {edge.node.title} 
                                </a> 
                              ) : (
                                <a
                                  key={edge.node.id}
                                  className="whitespace-nowrap text-2xl mx-2 text-gray-500 hover:text-gray-300 hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={edge.node.url}
                                >
                                  {edge.node.title}
                                </a>
                              )    
                            })}
                      </div>
                    </div>
                  </div>
              
              </Popover.Panel>
            </Transition>
            </>
        
      </Popover>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
       {
        allMainMenuJson {
            edges {
            node {
                id
                type
                url
                title
            }
            }
        }
        allSub1MenuJson {
            edges {
            node {
                id
                type
                url
                title
                text_color
            }
            }
        }
        allSub2MenuJson {
            edges {
            node {
                id
                type
                url
                title
            }
            }
        }
        }
    `}
    render={(data) => (
      <Menu 
      mainMenu={data.allMainMenuJson} 
      sub1={data.allSub1MenuJson} 
      sub2={data.allSub2MenuJson} 
      />
    )}
  />
)