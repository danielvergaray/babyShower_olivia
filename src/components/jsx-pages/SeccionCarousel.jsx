import React, { useContext } from "react";
import InfoContext from "../context/InfoContext";

const SeccionCarousel = () => {
  const { informacion, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);

  const { seccionCarousel, seccionHome } = informacion;
  return (
    <>
      <div
        className="carousel-titulo"
        /* data-aos={animacionEntrada}
        data-aos-duration={duracionAnimacion1} */
      >
        <div className="carousel-titulo-imagen">
          <img src={seccionHome.iconoHornoPanes} alt="" />
        </div>

        <p className="cuerpo-textos">{seccionCarousel.titulo} </p>
      </div>

      <div className="slider">
        <div className="slider-track">
          {seccionCarousel.carouselImagenes.map((imagen, index) => (
            <div className="slide" key={index}>
              <img src={imagen.imagenCarousel} alt="foto-DanielyPaola" />
            </div>
          ))}
          {seccionCarousel.carouselImagenes.map((imagen, index) => (
            <div className="slide" key={`dup-${index}`}>
              <img src={imagen.imagenCarousel} alt="foto-DanielyPaola" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SeccionCarousel;
