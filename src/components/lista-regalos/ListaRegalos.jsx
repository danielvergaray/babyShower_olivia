import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopUpCreator from "../modal/PopUpCreator";
import InfoContext from "../context/InfoContext";

const ListaRegalos = ({ regalos, textosArray }) => {
  const { informacion } = useContext(InfoContext);
  const { seccionHome } = informacion;
  const textos = textosArray[0];
  const [show, setShow] = useState(false);
  const [infoRegaloSelected, setInfoRegaloSelected] = useState({
    nombre: "",
    link: "",
    imagen: "",
    id: "",
  });

  //const navigate = useNavigate();

  const handleRegalo = (regaloSelected) => {
    setInfoRegaloSelected(regaloSelected);
    setShow(true);
    const regaloSelectedId = regaloSelected.id;
    const regaloSelectedNombre = regaloSelected.nombre;
    //navigate(`/lista-regalos/${regaloSelectedNombre}${regaloSelectedId}`);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="seccion-listaRegalos">
      {show && (
        <PopUpCreator
          show={show}
          tipoModal="lista-regalos"
          setShow={setShow}
          infoRegaloSelected={infoRegaloSelected}
        />
      )}
      <div className="hero-imagenCabecera">
        <img src={seccionHome.imagenCabecera} alt="" />
      </div>

      <div className="seccion-listaRegalos-titulo">
        <div className="seccion-listaRegalos-imagen">
          <img src={seccionHome.iconoCupcakePan} alt="icono-cupcakePan" />
        </div>
        <p>{textos.tituloPrincipal}</p>
      </div>
      <div className="seccion-listaRegalos-regalos">
        {regalos.map((regalo, index) => (
          <div key={index} className="seccion-listaRegalos-CadaRegalo">
            {regalo.disponible === "si" ? (
              <>
                <div className="seccion-listaRegalos-CadaRegalo_imagen">
                  <img src={regalo.linkImagen} alt="imagen_regalo" />
                  <div className="CadaRegalo_imagen-etiqueta etiquetaDisponible">
                    <button>DISPONIBLE</button>
                  </div>
                </div>
                <div className="seccion-listaRegalos-nombre">
                  <p>{regalo.nombre}</p>
                </div>
                <div className="seccion-listaRegalos-CadaRegalo_botones">
                  <Link to={regalo.linkWeb} target="_blank">
                    <button className="btn-verInfo">{textos.botonInfo}</button>
                  </Link>

                  <div>
                    <button
                      className="btn-reservar"
                      onClick={() => handleRegalo(regalo)}
                    >
                      {textos.botonReservar}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="seccion-listaRegalos-CadaRegalo_imagen ">
                  <img
                    className="imagenRegalo-noDisponible"
                    src={regalo.linkImagen}
                    alt="imagen_regalo"
                  />
                  <div className="CadaRegalo_imagen-etiqueta etiquetaNoDisponible">
                    <button>RESERVADO</button>
                  </div>
                </div>
                <div className="seccion-listaRegalos-nombre">
                  <p>{regalo.nombre}</p>
                </div>
                <div className="seccion-listaRegalos-CadaRegalo_botones">
                  <button className="btn-desactivado">
                    {textos.botonInfo}
                  </button>
                  <button className="btn-desactivado">
                    {textos.botonReservar}
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaRegalos;
