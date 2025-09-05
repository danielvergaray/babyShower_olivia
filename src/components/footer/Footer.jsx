import React, { useContext } from "react";
import { Link } from "react-router-dom";
import InfoContext from "../context/InfoContext";

const Footer = () => {
  const { informacion } = useContext(InfoContext);

  const { seccionFooter } = informacion;
  return (
    <>
      <div className="titulo-imagen">
        <img src={seccionFooter.tituloImagen} alt="" />
      </div>
      <div className="link-administrador">
        <Link to="/login">
          <p>¿Eres administrador?</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
