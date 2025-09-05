import React, { useContext, useEffect, useState } from "react";
import InfoContext from "../context/InfoContext";
import { AiTwotoneDelete } from "react-icons/ai";
import DropdownComponent from "../dropdown/DropdownComponent";
import PopUpCreator from "../modal/PopUpCreator";

const Administrador = () => {
  const { invitadosAdministrador, setInvitadosAdministrador } =
    useContext(InfoContext);
  const [show, setShow] = useState(false);
  const [userSelected, setUserSelected] = useState({});
  const [menuSelected, setMenuSelected] = useState("Todos");

  const handleDelete = (userData) => {
    setShow(true);
    setUserSelected({
      id: userData.id,
      nombre: userData.nombre,
    });
  };

  const dropdownMenu = [
    "Todos",
    "Positivos",
    "Negativos",
    "Pendientes",
    "Alfabetico",
  ];

  useEffect(
    () => {
      if (menuSelected === "Alfabetico") {
        const invitadosOrdenados = [...invitadosAdministrador].sort((a, b) =>
          a.nombre.localeCompare(b.nombre)
        );

        setInvitadosAdministrador(invitadosOrdenados);
      } else if (menuSelected === "Positivos") {
        const invitadosOrdenados = [...invitadosAdministrador].sort((a, b) =>
          b.respuesta.localeCompare(a.respuesta)
        );
        setInvitadosAdministrador(invitadosOrdenados);
      } else if (menuSelected === "Negativos") {
        const invitadosOrdenados = [...invitadosAdministrador].sort((b, a) =>
          b.respuesta.localeCompare(a.respuesta)
        );
        setInvitadosAdministrador(invitadosOrdenados);
      }
    },
    [menuSelected],
    [invitadosAdministrador]
  );

  return (
    <section className="seccion-administrador">
      {show && (
        <div className="administrador-popup">
          <PopUpCreator
            userSelected={userSelected}
            show={show}
            setShow={setShow}
            tipoModal="administrador"
          />
        </div>
      )}

      <div className="administrador">
        <h1>Lista invitados</h1>
        <div>
          <DropdownComponent
            menuSelected={menuSelected}
            setMenuSelected={setMenuSelected}
            menuOptions={dropdownMenu}
          />
        </div>
        <div className="administrador-menu">
          <p>Nombre</p>
          <p>Respuesta</p>
          <p>Mensaje</p>
          <p>Actions</p>
        </div>
        {invitadosAdministrador.map((invitado, index) => (
          <>
            <div className="administrador-invitado" key={index}>
              <p>{invitado.nombre}</p>
              <p>{invitado.respuesta !== "" ? invitado.respuesta : "-"}</p>
              <p>{invitado.mensaje !== "" ? invitado.mensaje : "-"}</p>

              <p
                onClick={() =>
                  handleDelete({
                    id: invitado.id,
                    nombre: invitado.nombre,
                  })
                }
              >
                <AiTwotoneDelete />
              </p>
            </div>
            <span></span>
          </>
        ))}
      </div>
    </section>
  );
};
export default Administrador;
