import React from 'react'
import style from './Controllers.module.scss'
const Controllers = () => {
  return (
    <div className={style.controllers}>
        <a href="" className='home'>
            <span className={style.mark}></span>
            <span>início</span>
            <picture>
                <img src="../src/assets/img/home-pattern.svg" alt="início" />
            </picture>
        </a>
        <a href="" className='list'>
            <span className={style.mark}></span>
            <span>Tarefas</span>
            <picture>
                <img src="../src/assets/img/aplicativos-pattern.svg" alt="gerenciamento" />
            </picture>
        </a>
        <a href="" className='favoritos'>
            <span className={style.mark}></span>
            <span>Favoritos</span>
            <picture>
                <img src="../src/assets/img/favorite-pattern.svg" alt="favoritos" />
            </picture>
        </a>
    </div>
  )
}

export default Controllers