import React from 'react'
import Card from '../Card/Card'
import style from "../Style/Cards.module.css"
import data from '../data.js'

const Cards = () => {
  return (
    <div className={style.container}>
     {
        data.map((card)=> (
            <Card
            img={card.imagen}
            titulo={card.titulo}
            descripcion={card.descripcion}
            precio={card.precio}
            />
        ))
     }
    </div>
  )
}

export default Cards
