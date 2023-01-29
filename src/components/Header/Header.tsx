import React from 'react'
import styles from './Header.module.scss';
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
        <span className={styles.warningSucess}>
          
        </span>
      </header>
  )
}

export default Header