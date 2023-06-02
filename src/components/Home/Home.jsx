import React from "react";
import style from "../Style/Home.module.css";
import util from "../../img/utensilios.jpg";
import corte from "../../img/corte.jpg";
import Carrusel from "../Carrusel/Carrusel";
import MapaGoogle from "../MapaGoogle/MapaGoogle";
import Footer from "../Footer/Footer";
import VideoYT from "../VideoYT/VideoYT";



const Home = () => {
  return (
    <div className={style.container}>
      <Carrusel />
      <section className={style.section}>
        <h1 className={style.title}>Sobre la Barbería Alura</h1>
        <div className={style.content}>
          <div>
            <img src={util} alt="" className={style.imgUtil} />
          </div>
          <div>
            <p className={style.texto}>
              Ubicada en el corazón de la ciudad, la Barbería Alura trae para el
              mercado lo que hay de mejor para su cabello y barba. Fundada en
              2020, la Barbería Alura ya es destaque en la ciudad y conquista
              nuevos clientes diariamente.
            </p>

            <p className={style.texto}>
              Nuestra misión es:
              <em>
                "Proporcionar autoestima y calidad de vida a nuestros clientes"
              </em>
              .
            </p>

            <p className={style.texto}>
              Ofrecemos profesionales experimentados que están constantemente
              observando los cambios y movimiento en el mundo de la moda, para
              así ofrecer a nuestros clientes las últimas tendencias. El
              atendimiento posee un padrón de excelencia y agilidad,
              garantizando calidad y satisfacción de nuestros clientes.
            </p>
          </div>
        </div>
      </section>
      <section className={style.section2}>
        <h1 className={style.title}>Nuestra Ubicación</h1>
        <p className={style.texto}>
          Nuestro establecimiento está ubicado en el corazón de la ciudad <i class="fa-solid fa-location-dot" style={{ color: "crimson" }}></i>
        </p>
        <MapaGoogle />
        <div className={style.diferenciales}>
          <h2 className={style.title2}>Diferenciales</h2>
          <div className={style.containerLista}>
            <ul className={style.lista}>
              <li className={style.items}>
                Atención personalizada a los clientes
              </li>
              <li className={style.items}>Espacio diferenciado</li>
              <li className={style.items}>Localización</li>
              <li className={style.items}>Profesionales calificados</li>
              <li className={style.items}>Puntualidad</li>
              <li className={style.items}>Limpieza</li>
            </ul>
            <div className={style.containerIMg}>
              <img src={corte} className={style.corteImg} alt="img not found" />
            </div>
          </div>
          <VideoYT/>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
