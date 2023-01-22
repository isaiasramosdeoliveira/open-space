import React from 'react'
import './Header.module.scss';
import logo from './img/logo.png';
const Header = () => {
  return (
      <header>
        <a href="#">
            <h3>Open Space</h3>
            <picture>
                <img src={logo} alt="" />
            </picture>
        </a>
      </header>
  )
}

export default Header