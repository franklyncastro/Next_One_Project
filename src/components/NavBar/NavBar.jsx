import React, { useEffect, useState } from 'react';
import style from "../Style/NavBar.module.css";
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${style.nav} ${isScrolled ? style.navSmall : ''}`}>
      <div className={style.containerImg}>
        <img src={logo} alt="img not found" className={style.img} />
      </div>
      <div className={`${style.containerLinks} ${isScrolled ? style.containerLinksSmall : ''}`}>
      <div className={style.containerLinks}>
        <Link to="/inicio" className={style.link}>
          <i className="fa-solid fa-house-chimney"></i> <span className={style.span}>INICIO</span>
        </Link>
        <Link to="/producto" className={style.link}>
          <i className="fa-solid fa-scissors"></i> <span className={style.span}>PRODUCTO</span>
        </Link>
        <Link to="/contacto" className={style.link}>
          <i className="fa-solid fa-id-card-clip"></i> <span className={style.span}>CONTACTO</span>
        </Link>
        <Link to="/" className={style.link}>
          <i className="fas fa-sign-out-alt"></i> <span className={style.span}>EXIT</span>
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default NavBar;
