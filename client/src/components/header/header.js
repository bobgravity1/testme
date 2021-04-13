import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from './image'
import Logo from './logo'
import Arrow from './arrow'
import Button from '../button/button'

const Header = ({ siteTitle }) => (
  <header>
  <nav>
  <div className='logo'>
<Logo />
</div>
  <ul className='navbar-items'>
    <li className='navbar-item'>Solutions<Arrow className='navbar-arrow'/></li>
    <li className='navbar-item'>Services<Arrow className='navbar-arrow'/></li>
    <li className='navbar-item' >Industries<Arrow className='navbar-arrow'/></li>
    <li className='navbar-item'>Workshops<Arrow className='navbar-arrow'/></li>
    <li className='navbar-item'>Why Orcawise<Arrow className='navbar-arrow'/></li>
  </ul>
    <div className='navbar-button'>
      <p>Login</p>
    <Button />
    </div>

  </nav>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
