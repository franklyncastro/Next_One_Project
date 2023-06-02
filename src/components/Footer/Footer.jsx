import React from 'react'
import logo from '../../img/logoBlanco.png'
import style from '../Style/Footer.module.css'
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
      <img src={logo} alt="img not found" />
      </div>
      
      <p>© Copyright Barbería Alura - 2020</p>
    </div>
  )
}

export default Footer
