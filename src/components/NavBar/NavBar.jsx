import React from 'react'
import style from "../Style/NavBar.module.css"
import { Link } from 'react-router-dom'
import logo from "../../img/logo.png";


const NavBar = () => {
  return (
    <nav className={style.nav}>
        <div className={style.containerImg}>
          <img src={logo} alt="img not found" className={style.img} />
        </div>
        <div className={style.containerLinks}>
          <Link to="/inicio" className={style.link}>
            <i class="fa-solid fa-house-chimney"></i> <span className={style.span}>INICIO</span>
          </Link>
          <Link to="/producto" className={style.link}>
            <i class="fa-solid fa-scissors"></i> <span className={style.span}>PRODUCTO</span>
          </Link>
          <Link to="/contacto" className={style.link}>
            <i class="fa-solid fa-id-card-clip"></i> <span className={style.span}>CONTACTO</span>
          </Link>
        </div>
      </nav>
  )
}

export default NavBar
