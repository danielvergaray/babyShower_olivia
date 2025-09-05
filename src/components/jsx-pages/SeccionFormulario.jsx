import React, { useContext, useEffect, useState } from "react";
import InfoContext from "../context/InfoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUpCreator from "../modal/PopUpCreator";
import Dropdown from "react-bootstrap/Dropdown";
import { BsChevronDown } from "react-icons/bs";
import { HiPlusCircle } from "react-icons/hi";
import { FaMinusCircle } from "react-icons/fa";
import ToastifyComponent from "../toastify/ToastifyComponent";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const SeccionFormulario = () => {
  const {
    informacion,
    loading,
    getUserData,
    getUserDataName,
    handleEnviarFormulario,
    userData,
    tipoPopUpFormulario,
    verificarInvitados,
    animacionEntrada,
    duracionAnimacion1,
    usuarioAprobado,
  } = useContext(InfoContext);

  const { seccionForm } = informacion;

  const [isButtonsDisabled, setIsButtonDisabled] = useState(true);

  const [showInputInvitado, setShowInputInvitado] = useState(false);

  const [dropdownOptionSelected, setDropdownOptionSelected] = useState(
    "Confirma tu asistencia"
  );

  const [userGuests, setUserGuests] = useState([]);
  const [guestNameTyped, setGuestNameTyped] = useState("");
  const [guestNameSanitized, setGuestNameSanitized] = useState("");
  const [noGuestVacancyNotification, setNoGuestVacancyNotification] =
    useState(false);

  const handleUserGuest = (event) => {
    const { name, value } = event.target;
    const sanitizedValue = value
      .replace(/[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/g, "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    setGuestNameSanitized(sanitizedValue);
    setGuestNameTyped(value.toLowerCase());
  };

  const handleAddGuest = async () => {
    if (userGuests.length < 3) {
      const invitadoVerificado = await verificarInvitados(guestNameSanitized);

      if (invitadoVerificado) {
        const busquedaInvitadoEnArray = userGuests.includes(guestNameTyped);
        if (!busquedaInvitadoEnArray) {
          setUserGuests((prev) => [...prev, guestNameTyped]);

          setGuestNameTyped("");
        } else {
          toast("Ya has agregado a esta persona");
        }
      } else {
        toast("No puedes agregar a esta persona");
      }
    } else {
      toast("Cantidad maxima de invitados alcanzada");
    }
  };

  const deleteUserGuest = (guest) => {
    const nuevoArray = userGuests.filter(
      (guestToDelete) => guestToDelete !== guest
    );
    setUserGuests(nuevoArray);
  };
  useEffect(() => {
    if (
      usuarioAprobado &&
      dropdownOptionSelected !== "Confirma tu asistencia"
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [usuarioAprobado, dropdownOptionSelected]);

  return (
    <>
      <ToastifyComponent />

      {tipoPopUpFormulario && (
        <PopUpCreator tipoModal={tipoPopUpFormulario} show={true} />
      )}

      <div className="seccion-formulario-userContainer">
        <div className="seccion-formulario-titulo">
          <p>{seccionForm.titulo}</p>
          <p>{seccionForm.subtitulo}</p>
        </div>

        <div className="seccion-formulario-usuario">
          <form action="">
            <label htmlFor="nombre"></label>
            <input
              type="text"
              name="nombre"
              pattern="^[a-zA-Z ]*$" // Acepta solo letras (mayúsculas y minúsculas) y espacios
              title="Solo se permiten letras (mayúsculas y minúsculas) y espacios"
              placeholder="NOMBRE Y APELLIDO"
              value={userData.nombre}
              onChange={getUserDataName}
              required
            />
            <p className="formulario-icono">
              {!usuarioAprobado && userData.nombre.length > 0 ? (
                <IoMdCloseCircle />
              ) : usuarioAprobado && userData.nombre.length > 0 ? (
                <FaCheckCircle />
              ) : null}
            </p>
          </form>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <p>{dropdownOptionSelected}</p>
              <p>
                <BsChevronDown />
              </p>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setDropdownOptionSelected("Sí")}>
                Sí
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setDropdownOptionSelected("No")}>
                No
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {dropdownOptionSelected === "Sí" && usuarioAprobado && (
            <div className="formulario-usuario-linkInvitados">
              <p onClick={() => setShowInputInvitado(!showInputInvitado)}>
                ¿Deseas agregar a alguien mas?
              </p>
            </div>
          )}
        </div>

        <div className="seccion-formulario-invitados">
          {showInputInvitado && (
            <div className="seccion-formulario-invitadosInput">
              <form action="">
                <label htmlFor="nombre"></label>
                <input
                  type="text"
                  name="nombre"
                  pattern="^[a-zA-Z ]*$" // Acepta solo letras (mayúsculas y minúsculas) y espacios
                  title="Solo se permiten letras (mayúsculas y minúsculas) y espacios"
                  placeholder="NOMBRE Y APELLIDO DEL INVITADO"
                  onChange={handleUserGuest}
                  value={guestNameTyped}
                  required
                />
              </form>
              <div onClick={handleAddGuest} className="icono-agregar">
                <HiPlusCircle />
              </div>
            </div>
          )}

          <div className="seccion-formulario-invitadosAgregados">
            {userGuests.map((guest, index) => (
              <div key={index}>
                <p>{guest}</p>
                <p onClick={() => deleteUserGuest(guest)}>
                  <FaMinusCircle />
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="seccion-formulario-btn">
          <button
            disabled={isButtonsDisabled}
            className={isButtonsDisabled ? "disabledButton" : ""}
            onClick={(event) => {
              handleEnviarFormulario(event, dropdownOptionSelected, userGuests);

              // Reiniciar valores después de enviar
              setDropdownOptionSelected("Confirma tu asistencia");
              setUserGuests([]);
              setShowInputInvitado(false);
            }}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default SeccionFormulario;
