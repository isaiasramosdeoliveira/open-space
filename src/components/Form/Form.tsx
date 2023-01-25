import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Form.module.scss';
import { DisplayForm } from '../../redux/assignment/assignmentSlice';
import CreateAssignment from '../createAssignment/CreateAssignment';
const Form = ({value}: any) => {
    const {stateForm, warningForm}: boolean | any = useSelector(state => state)
    const dispatch = useDispatch()
    const handleExitForm = () => {
        dispatch(DisplayForm({stateForm: false}))
    }
  return (
      <section className={styles.form} >
          <form action="#">
              <div className={styles.warning}>
                  {warningForm? <span>Preencha os campos.</span>: ''}
              </div>
            <div className={styles.exit} onClick={handleExitForm}>
              <i className="fa-solid fa-circle-xmark"></i>
            </div>
              <label htmlFor="title">
                  <input type="text" name="title" id="title" placeholder='Título da tarefa'/>
              </label>
              <br />
              <label htmlFor="body">
                  <input type="text" name="body" id="body" placeholder='Descrição da tarefa' />
              </label>
              <input type="date" name="date" id="date" />
              <br />
              <CreateAssignment value={value}/>
          </form>
      </section>
  )
}

export default Form