import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons'
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'


const Footer = ({ content, facebook, email }) => (
  <footer className="flex flex-col mb-8 py-5 h-48">
    <div className='mx-auto text-center'> 
      <h5 className='text-gray-600'>{content}</h5>
      <div>
        <a href={facebook} target='_blank' rel='noreferrer' className='mx-2'>
          <FontAwesomeIcon className='text-cyan-700 hover:text-gray-400' icon={faFacebook} size='2x' /> 
        </a> 
        <a href={`mailto:=${email}`} target='_blank' rel='noreferrer' className='mx-2'> 
          <FontAwesomeIcon className='text-cyan-700 hover:text-gray-400' icon={faEnvelope} size='2x' /> 
        </a>    
      </div> 
      <p className='text-gray-600'>Built by <a className='text-cyan-700 hover:text-gray-600' href="https://github.com/LMarlette" target="_blank">LMarlett</a></p>
    </div>
  </footer>
)

export default Footer
