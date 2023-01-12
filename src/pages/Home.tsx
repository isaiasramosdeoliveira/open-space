import React, { useState } from 'react'
import styles from "./styles/Home/Home.module.scss";

import logo from './../../src/assets/img/logo.png';

const Home = ({handleLoandingPage, value}: any) => {
  const [state, setState] = useState(value)
  return (
    <section className={styles.container}>
      <div className={styles.menu}>
        <a href=""><i  onClick={() => setState(true)} className="fa-solid fa-xmark"></i></a>
      </div>
      <div className={styles.apresentation}>
        <picture>
          <img src={logo} alt="logo" />
        </picture>
        <h1>Open Space</h1>
        <h5>O lugar certo para você organizar sua vida.</h5>
        <button onClick={() =>setState(true)}>Começar</button>
      </div>
    </section>
  )
}

export default Home