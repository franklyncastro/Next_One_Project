import React from "react";
import { Link } from "react-router-dom";
import style from "../Style/Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <marquee className={style.title}>Bienvenido</marquee>
      <div className={style.container2}>
        <Link to="/inicio" className={style.link}>
          <i class="fa-solid fa-scissors"></i> Entrar
        </Link>
        <div>
          <span className={style.span}>
            Copyright © 2023 Franklyn Castro Develop
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
