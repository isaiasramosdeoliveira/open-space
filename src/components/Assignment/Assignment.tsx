import React from 'react';
import styles from './Assignment.module.scss';
import { useSelector } from 'react-redux';

function Assignment() {
  const {assignment}: Array<Object> | any = useSelector(state => state)    
  return (
    <div className={styles.tarefas}>
        {assignment? assignment?.map((assignment: any) => (
          <div className={styles.tarefa} key={assignment.id}>
            <div className={styles.priority}>
              <a href="#" >
              <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
            <h3>{assignment.title}</h3>
            <p>{assignment.body}</p>
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
        )) : <div className={styles.empty}>Vazio</div>}
    </div>
  )
}

export default Assignment