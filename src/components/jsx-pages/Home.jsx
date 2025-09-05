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
  const { informacion } = useContext(InfoContext);
  const { seccionHome } = informacion;

  useEffect(() => {
    Aos.init();
  }, [{ duration: 100 }]);

  return (
    <>
      <section
        className="hero-section" /* data-aos-easing="linear" data-aos="fade-in" data-aos-duration="2000" */
      >
        <div className="hero-imagenCabecera">
          <img src={seccionHome.imagenCabecera} alt="" />
        </div>
        <div className="hero-subtitulo">
          <p>Bienvenida {seccionHome.nombre}</p>
        </div>
        <div
          className="hero-titulo" /* data-aos-easing="linear"data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" */
        >
          <img
            className="titulo-imagen"
            src={seccionHome.tituloImagenPortada}
            alt="nombre-evento"
          />
        </div>
        <div
          className="hero-fecha" /* data-aos-easing="linear" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="1500" */
        >
          <p>{seccionHome.fecha}</p>
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
