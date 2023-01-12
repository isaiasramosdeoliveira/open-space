import React from 'react'
import styles from './Menu.module.scss'; 
import Header from '../Header/Header';
import Assignment from '../Assignment/Assignment';

import perfil from ''

function Menu() {
  return (
    <section>
      <Header/>
      <article className={styles.display}>
        <div className={styles.selects}>
        <a href="" className={styles.user}>
            <picture>
              <img src="./../src/assets/img/perfil.svg" alt="tarefas de hoje" />
            </picture>
          </a>
        <a href="">
            <p>Todas</p>
            <picture>
              <img src="./../src/assets/img/todas-pattern.svg" alt="todas as tarefas" />
            </picture>
          </a>
          <a href="">
            <p>Hoje</p>
            <picture>
              <img src="./../src/assets/img/hoje-pattern.svg" alt="tarefas de hoje" />
            </picture>
          </a>
          <a href="">
            <p>Semana</p>
            <picture>
              <img src="./../src/assets/img/semana-pattern.svg" alt="tarefas da semana" />
            </picture>
          </a>
          <a href="">
            <p>Mês</p>
            <picture>
              <img src="./../src/assets/img/calendario-pattern.svg" alt="tarefas do mês" />
            </picture>
          </a>
          <a href="">
            <p>Lixeira</p>
            <picture>
              <img src="./../src/assets/img/lixo-pattern.svg" alt="lixeira" />
            </picture>
          </a>
        </div>
        <div className={styles.vision}>
          <div className={styles.tarefas}>
            <Assignment/>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Menu