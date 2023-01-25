import React, { useEffect, useState } from 'react'
import styles from './Menu.module.scss'; 
import Header from '../Header/Header';
import Assignment from '../Assignment/Assignment';
import { useDispatch, useSelector } from 'react-redux';
import { DisplayForm, menuExpand } from '../../redux/assignment/assignmentSlice';
import SelectsWeb from '../SelectsWeb/SelectsWeb';
import SelectsMobile from '../SelectsMobile/SelectsMobile';
import Form from '../Form/Form';

function Menu() {
  const [textForm, settextForm] = useState('Criar')

  const container = document.querySelector("body") as HTMLBodyElement;
  const dispatch = useDispatch()
  const {display}: any = useSelector(state => state)
  const {stateForm}: boolean | any = useSelector(state => state)
  const handleIncrementAssignment = () =>{
    dispatch(DisplayForm({stateForm: true}))
  }
  const handleExpandMenu = (e: Event) =>{
    e.preventDefault()
    dispatch(menuExpand({display: true}))
  }
  const handleExitMenu = (e: Event) =>{
    e.preventDefault()
    dispatch(menuExpand({display: false}))
  }
  return (
    <section>
      <Header/>
      <article className={styles.display}>
        {display?  
          (
            <a href="" className={styles.menuExit} onClick={(e: any) => handleExitMenu(e)}>
            <picture>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z"/><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/></svg>
            </picture>
          </a>
          )
          :
          (<a href="" className={styles.menuExpand} onClick={(e: any) => handleExpandMenu(e)}>
            <picture>
              <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><rect y="11" width="24" height="2" rx="1"/><rect y="4" width="24" height="2" rx="1"/><rect y="18" width="24" height="2" rx="1"/></svg>
            </picture>
          </a>)
        }
          {display? <SelectsMobile/>: ''}
        <SelectsWeb/>
        <div className={styles.vision}>
          <div className={styles.tarefas}>
            <Assignment/>
          </div>
          <div className={styles.increment}>
            <i onClick={handleIncrementAssignment}  className="fa-solid fa-circle-plus"></i>
          </div>
        </div>
        { stateForm? <Form value={textForm} />: ''}
      </article>
    </section>
  )
}

export default Menu