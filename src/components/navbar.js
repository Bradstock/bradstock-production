import React, { Component } from 'react'
import { Link } from 'gatsby'

import { graphql, StaticQuery } from 'gatsby'

import Image from './Image';
import Menu from './menu';

class Navbar extends Component {

  render() {

    // function classNames(...classes) {
    //   return classes.filter(Boolean).join(' ')
    // }

    return (
      // TODO: max width of the edges
      <div className='group z-2 bg-gradient-to-t from-transparent via-black/25 to-black/60 transition delay-300 duration-300 ease-in-out hover:bg-gradient-to-t hover:from-transparent hover:via-black/40 hover:to-black/80'>
           <Menu />           
      <div className='grid grid-cols-1 md:grid-cols-3 items-top pt-2 pb-2'>

        {/* column 1 */}
        <div className='justify-start hidden md:flex'>     
        </div>
        
        {/* column 2 */}
        {/* TODO: fix justify-rught on mobile */}
        <div className='flex justify-end md:justify-center'>
          <Link
            to="/"
          >
            <Image
              src="logos/bradstock_logo.png"
              className="w-48 mx-auto mr-5 md:mr-0"
              alt="Logo Image"
              // style={{
              //   border: '10px solid green',
              // }}
            />
          </Link>
        </div>

        {/* column 3 */}
        <div className="justify-end mr-5 hidden md:flex">
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
                }
              `}
              render={data =>
                data.allMainMenuJson.edges.map(edge => {
                  return edge.node.type === 'internal' ? (
                    <Link
                      key={edge.node.id}
                      to={edge.node.url}
                      className="whitespace-nowrap text-lg mx-2 link-hover text-white font-medium hover:text-cyan-600"
                    >
                       {edge.node.title} 
                    </Link> 
                  ) : (
                    <a
                      key={edge.node.id}
                      className="whitespace-nowrap text-lg mx-2 link-hover text-white font-medium  hover:text-cyan-600"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={edge.node.url}
                    >
                      {edge.node.title}
                    </a>
                  )
                })
              }
            />
        </div>
      </div>
    </div>
    )
  }
}

export default Navbar
