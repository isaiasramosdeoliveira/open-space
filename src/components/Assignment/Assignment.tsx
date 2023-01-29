import React, { useState } from 'react';
import styles from './Assignment.module.scss';
import { useSelector } from 'react-redux';
import empaty from './empty.png';
function Assignment() {
  const {assignment}: Array<Object> | any = useSelector(state => state)
  return (
    <div className={styles.tarefas}>
        {assignment[0]? assignment?.map((assignment: any) => (
          <div className={styles.tarefa} key={assignment.id}>
            <div className={styles.priority}>
              <a href="#" >
              <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
            <h3>{assignment.title}</h3>
            <p>{assignment.body}</p>
            <small>{assignment.date}</small>
            <div className={styles.status}>
              <a href="" className={styles.remove}>
                <i className="fa-solid fa-trash-can"></i>
              </a>
              <button>
                <a href="#" className='view'>Ver tarefa</a>
              </button>
              <a href="" className={styles.edit}>
                <i className="fa-solid fa-pen"></i>
              </a>
            </div>
          </div>
        )) : <div className={styles.empty}>
          <p>
            <em>Nenhuma tarefa.</em>
          </p>
          <picture>
            <img src={empaty} alt="imagem de sem tarefas" />
          </picture>
          </div>}
    </div>
  )
}

export default Assignment