import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InfoContext from "../context/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const PopUpCreator = ({
  tipoModal,
  show,
  setShow,
  userSelected,
  infoRegaloSelected,
}) => {
  const {
    deleteUsersInfoAdministrador,
    setIipoPopUpFormulario,
    iconoMuffin,
    getUserDataName,
    usuarioAprobado,
    userData,
    setUserData,
  } = useContext(InfoContext);
  const [listaRegalosSection, setListaRegalosSection] = useState("");
  const [showInputDedicatoria, setShowInputDedicatoria] = useState(false);
  const [isButtonListaRegalosDisabled, setIsButtonListaRegalosDisabled] =
    useState(true);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(false);
  };

  const handleCloseListaRegalos = () => {
    navigate("/lista-regalos");
    setShow(false);
    setShowInputDedicatoria(false);
    setListaRegalosSection("");
    setUserData((prev) => ({
      ...prev,
      nombre: "",
    }));
  };
  const handleSiguienteButton = () => {
    const regaloSelectedId = infoRegaloSelected.id;
    const regaloSelectedNombre = infoRegaloSelected.nombre;
    navigate(
      `/lista-regalos/${regaloSelectedNombre}${regaloSelectedId}/confirmacionRegalo`
    );
    setListaRegalosSection("confirmacionRegalo");
  };
  const handleListaRegaloEnviarButton = () => {
    setListaRegalosSection("agradecimiento");
  };

  useEffect(() => {
    if (usuarioAprobado) {
      setIsButtonListaRegalosDisabled(false);
    }
  }, [usuarioAprobado]);

  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {tipoModal === "lista-regalos" ? (
          <>
            {listaRegalosSection === "confirmacionRegalo" ? (
              <div className="modal-listaRegalos modal-listaRegalos-confirmacion ">
                <Modal.Header>
                  <p>
                    <IoCloseCircleOutline onClick={handleCloseListaRegalos} />
                  </p>
                </Modal.Header>

                <Modal.Body>
                  <div>
                    <p>ingresa tu nombre para completar la reserva</p>
                  </div>
                  <div className="seccion-formulario-regalos">
                    <form action="">
                      <input
                        type="text"
                        name="nombre"
                        pattern="^[a-zA-Z ]*$" // Acepta solo letras (mayúsculas y minúsculas) y espacios
                        title="Solo se permiten letras (mayúsculas y minúsculas) y espacios"
                        placeholder="NOMBRE Y APELLIDO"
                        onChange={getUserDataName}
                        required
                      />
                    </form>
                    <p className="formulario-icono">
                      {!usuarioAprobado && userData.nombre.length > 0 ? (
                        <IoMdCloseCircle />
                      ) : usuarioAprobado && userData.nombre.length > 0 ? (
                        <FaCheckCircle />
                      ) : null}
                    </p>
                  </div>

                  {usuarioAprobado && (
                    <p
                      onClick={() => setShowInputDedicatoria(true)}
                      className="modal-listaRegalos-linkDedicatoria"
                    >
                      ¿Deseas agregar una dedicatoria?
                    </p>
                  )}
                  {showInputDedicatoria && usuarioAprobado && (
                    <div className="form-dedicatoria">
                      <form>
                        <input type="text" placeholder="Escribe tu mensaje" />
                      </form>
                    </div>
                  )}
                  <button
                    className={
                      isButtonListaRegalosDisabled ? "disabledButton" : null
                    }
                    disabled={isButtonListaRegalosDisabled}
                    onClick={handleListaRegaloEnviarButton}
                  >
                    enviar
                  </button>
                </Modal.Body>
              </div>
            ) : listaRegalosSection === "agradecimiento" ? (
              <div className="modal-listaRegalos modal-listaRegalos-confirmacion ">
                <Modal.Header>
                  <p>
                    <IoCloseCircleOutline onClick={handleCloseListaRegalos} />
                  </p>
                </Modal.Header>

                <Modal.Body>
                  <div>Aqui va una imagen</div>
                  <div>
                    <p>
                      gracias por reservar este regalo recuerda comprarlo antes
                      del evento
                    </p>
                  </div>
                </Modal.Body>
              </div>
            ) : (
              <div className="modal-listaRegalos">
                <Modal.Header>
                  <p>
                    <IoCloseCircleOutline onClick={handleCloseListaRegalos} />
                  </p>
                </Modal.Header>

                <Modal.Body>
                  <div className="listaRegalos-imagen">
                    <img
                      src={infoRegaloSelected.linkImagen}
                      alt="imagen-regalo"
                    />
                    <p>{infoRegaloSelected.nombre}</p>
                  </div>
                  <div className="listaRegalos-texto">
                    <p>
                      elegiste algo muy especial. presiona siguiente para
                      continuar
                    </p>
                    <button onClick={handleSiguienteButton}>siguiente</button>
                  </div>
                </Modal.Body>
              </div>
            )}
          </>
        ) : tipoModal === "administrador" ? (
          <>
            <Modal.Header closeButton>
              <Modal.Title>Gestion de invitados</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ¿Estas seguro que deseas eliminar la informacion de{" "}
              {userSelected.nombre}?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                onClick={() => deleteUsersInfoAdministrador(userSelected.id)}
                variant="primary"
              >
                Eliminar
              </Button>
            </Modal.Footer>
          </>
        ) : tipoModal === "usuarioYaRegistrado" ? (
          <>
            <Modal.Header>
              <p>
                <IoCloseCircleOutline
                  onClick={() => setIipoPopUpFormulario("")}
                />
              </p>
            </Modal.Header>
            <Modal.Body>
              Hola, ya has registrado tu respuesta anteriormente, si quieres
              cambiarla, comunciate con el administrador del evento
            </Modal.Body>
          </>
        ) : tipoModal === "confirmacionPositiva" ? (
          <div className="modal-confirmacionInvitacion">
            <Modal.Header>
              <p>
                <IoCloseCircleOutline
                  onClick={() => setIipoPopUpFormulario("")}
                />
              </p>
            </Modal.Header>
            <Modal.Body>
              <img src={iconoMuffin} alt="icono-muffin" />
              <p>Gracias por confirmar.</p>
              <p>te esperamos el domingo 28</p>
            </Modal.Body>
            <Modal.Footer>
              <Link to="/lista-regalos">
                <button>VER LISTA DE REGALOS</button>
              </Link>
            </Modal.Footer>
          </div>
        ) : tipoModal === "confirmacionNegativa" ? (
          <div className="modal-confirmacionInvitacion">
            <Modal.Header>
              <p>
                <IoCloseCircleOutline
                  onClick={() => setIipoPopUpFormulario("")}
                />
              </p>
            </Modal.Header>
            <Modal.Body>
              <img src={iconoMuffin} alt="icono-muffin" />
              <p>Lamentamos no poder contar contigo</p>
            </Modal.Body>
          </div>
        ) : null}
      </Modal>
    </>
  );
};

export default PopUpCreator;
