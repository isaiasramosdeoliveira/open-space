import React from 'react'
import './Header.module.scss';
const Header = () => {
  return (
      <header>
        <a href="#">
            <h3>Open Space</h3>
            <picture>
                <img src="../src/assets/img/logo.png" alt="" />
            </picture>
        </a>
      </header>
  )
}

export default Header