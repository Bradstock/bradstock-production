import PropTypes from 'prop-types'
import React from 'react'

import Navbar from './navbar'

const Header = ({ siteTitle }) => (
  <header className="mb-0">
    <section className="navigation relative z-40">
      <Navbar siteTitle={siteTitle} />
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
