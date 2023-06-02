import Carousel from "react-bootstrap/Carousel";
import style from "../Style/Carrusel.module.css";
import img1 from "../../img/imgCarrusel/1.jpg";
import img2 from "../../img/imgCarrusel/2.jpg";
import img3 from "../../img/imgCarrusel/3.jpg";
import img4 from "../../img/imgCarrusel/4.jpg";

function Carrusel() {
  return (
    <Carousel className={style.container}>
      <Carousel.Item>
        <img className={style.img} src={img1} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.img} src={img2} alt="Second slide" />

        <Carousel.Caption>
          {/* <h3>BarberShop</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.img} src={img3} alt="Third slide" />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className={style.img} src={img4} alt="First slide" />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
