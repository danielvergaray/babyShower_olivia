import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InfoContext from "../context/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoCloseCircleOutline } from "react-icons/io5";

const PopUpCreator = ({ tipoModal, show, setShow, userSelected }) => {
  const {
    deleteUsersInfoAdministrador,
    setIipoPopUpFormulario,
    iconoMuffin,
    usuarioAprobado,
  } = useContext(InfoContext);

  const [isButtonListaRegalosDisabled, setIsButtonListaRegalosDisabled] =
    useState(true);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    if (usuarioAprobado) {
      setIsButtonListaRegalosDisabled(false);
    } else {
      setIsButtonListaRegalosDisabled(true);
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
        dialogClassName="modal-lg"
      >
        {tipoModal === "administrador" ? (
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
              <p>Ya te has registrado</p>
              <p>anteriormente, comunícate</p>
              <p>con el administrador</p>
            </Modal.Body>
            <Modal.Footer>
              <br></br>
            </Modal.Footer>
          </div>
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
              <p>te esperamos</p>
            </Modal.Body>
            <Modal.Footer>
              <Link to="https://baby-shower-olivia-lista-regalos.vercel.app/">
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
              <p style={{ paddingTop: "20px" }}>
                Lamentamos no poder contar contigo
              </p>
            </Modal.Body>
          </div>
        ) : null}
      </Modal>
    </>
  );
};

export default PopUpCreator;
