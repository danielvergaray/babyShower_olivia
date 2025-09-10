import React, { useContext, useEffect, useState, useRef } from "react";
import InfoContext from "../context/InfoContext";
import SobreEvento from "./SobreEvento";
import SeccionRegalos from "./SeccionRegalos";
import SeccionFormulario from "./SeccionFormulario";
import SeccionCarousel from "./SeccionCarousel";
import SeccionContador from "./SeccionContador";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../footer/Footer";
import { CiCircleChevDown } from "react-icons/ci";

const Home = () => {
  const { informacion, animacionEntrada, duracionAnimacion1 } =
    useContext(InfoContext);
  const { seccionHome } = informacion;

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      <section className="hero-section">
        <div className="hero-imagenCabecera">
          <img src={seccionHome.imagenCabecera} alt="imagen-toldo" />
        </div>
        <div className="hero-subtitulo" data-aos={animacionEntrada}>
          <p className="cuerpo-textos">Bienvenida {seccionHome.nombre}</p>
        </div>
        <div
          className="hero-titulo"
          data-aos={animacionEntrada}
          data-aos-duration={duracionAnimacion1}
          data-aos-offset="200"
        >
          <img
            className="titulo-imagen"
            src={seccionHome.tituloImagenPortada}
            alt="nombre-evento"
          />
        </div>
        <div
          className="hero-fecha"
          data-aos={animacionEntrada}
          data-aos-duration={duracionAnimacion1}
          data-aos-offset="350"
        >
          <p className="subtitulos-textos">{seccionHome.fecha}</p>
        </div>
        <div className="hero-flecha">
          <CiCircleChevDown />
        </div>
      </section>

      <section className="seccion-contador">
        <SeccionContador />
      </section>

      <section className="seccion-sobreEvento">
        <SobreEvento />
      </section>

      <section className="seccion-carousel">
        <SeccionCarousel />
      </section>

      <section className="seccion-formulario">
        <SeccionFormulario />
      </section>

      <section className="seccion-regalos">
        <SeccionRegalos />
      </section>

      <section className="seccion-footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
