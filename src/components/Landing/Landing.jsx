import React from "react";
import { Link } from "react-router-dom";
import style from "../Style/Landing.module.css";
import video from "../../img/video.mp4";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.videoContainer}>
        <video className={style.video} autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>

        <div className={style.content}>
          <Link to="/inicio" className={style.link}>
            <i className="fa-solid fa-scissors"></i> Entrar
          </Link>
        </div>
      </div>

      <div className={style.container2}>
          <span className={style.span}>
            Copyright © 2023 Franklyn Castro Dev.
          </span>
      </div>
    </div>
  );
};

export default Landing;
