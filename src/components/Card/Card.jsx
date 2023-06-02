import React from "react";
import style from "../Style/Card.module.css";

const Card = ({ precio, titulo, descripcion, img }) => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.cardImg}>
          <img src={img} alt="img not found" className={style.img}/>
        </div>
        <div className={style.cardInfo}>
          <p className={style.textTitle}>{titulo}</p>
          <p className={style.textBody}>{descripcion}</p>
        </div>
        <div className={style.cardFooter}>
          <span className={style.textTitle}>RD${precio}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
