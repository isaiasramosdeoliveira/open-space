import React, { useState , useContext, useEffect} from 'react'
import styles from "./styles/Home/Home.module.scss";
import logo from './../../src/assets/img/logo.png';
import { Context } from '../App';
import { removeHome } from '../redux/assignment/assignmentSlice';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';

const Home = () => {
  const dispatch = useDispatch()
  const {value, setValue} = useContext(Context) as any
  const handleActive = (): void =>{
    dispatch(removeHome({state: true}))
  }
  return (
    <section className={styles.container}>
      <div className={styles.apresentation}>
        <picture>
          <img src={logo} alt="logo"/>
        </picture> 
        <h1>Open Space</h1>
        <h5>O lugar certo para você organizar sua vida.</h5>
        <button onClick={handleActive}>Começar</button>
      </div>
    </section>
  )
}

export default Home