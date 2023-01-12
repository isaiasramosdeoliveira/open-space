import React from 'react';
import styles from './Assignment.module.scss';

function Assignment() {
  return (
    <div className={styles.tarefas}>
        <div className={styles.tarefa}>
            <div className={styles.priority}>
              <a href="#" >
              <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
            <h3>Tarefa</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, alias dolor fugit sed, aperiam nobis minus animi voluptatum ipsam, maxime fuga accusantium sit voluptates nemo. Eaque non quod qui quas?</p>
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
    </div>
  )
}

export default Assignment