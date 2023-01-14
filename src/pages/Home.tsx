import React, { useState , useContext, useEffect} from 'react'
import styles from "./styles/Home/Home.module.scss";
import logo from './../../src/assets/img/logo.png';
import { Context } from '../App';

const Home = ({handleLoandingPage}: any) => {
  const {value, setValue} = useContext(Context) as any
  const handleActive = (): void =>{
    setValue(true)
  } 
  return (
    <section className={styles.container}>
      <div className={styles.menu}>
        <a href=""><i onClick={handleActive} className="fa-solid fa-xmark"></i></a>
      </div>
      <div className={styles.apresentation}>
        <picture>
          <img src={logo} alt="logo" />
        </picture>
        <h1>Open Space</h1>
        <h5>O lugar certo para você organizar sua vida.</h5>
        <button onClick={handleActive}>Começar</button>
      </div>
    </section>
  )
}

export default Home