import PropTypes from 'prop-types'
import React from 'react'

import Navbar from './navbar'

const Header = ({ siteTitle }) => (
  <header className="mb-9">
    <section className="navigation">
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
