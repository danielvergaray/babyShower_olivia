import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const AgregarInvitados = () => {
  const generarId = () => {
    return String(Math.floor(100000 + Math.random() * 900000));
  };

  const invitados = [
    {
      nombre: "abrilcarazas",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["josearias", "cesarcarazas", "patriciaelorreaga"],
    },
    {
      nombre: "josearias",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["abrilcarazas", "cesarcarazas", "patriciaelorreaga"],
    },
    {
      nombre: "aimikomori",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["maritzaarzubiaga", "akiokomori"],
    },
    {
      nombre: "akiokomori",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "alexhuertas",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "carollopez",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "cesarcarazas",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "patriciaelorreaga",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "hiaradelarosa",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "libnadavila",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "lizflores",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "natalysilva",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "nathaliemendieta",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "priscilacarazas",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "rosacarcamo",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "ruthmerino",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "alonsogarrido",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["mariaferoullon", "lunagarrido"],
    },
    {
      nombre: "mariaferoullon",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["lunagarrido", "alonsogarrido"],
    },
    {
      nombre: "lunagarrido",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["mariaferoullon", "alonsogarrido"],
    },
    {
      nombre: "claudiacardenas",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "danielvillaverde",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "maritzaarzubiaga",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },

    {
      nombre: "ofeliaarzubiaga",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "diegovergaray",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "jamesterry",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "luisvergaray",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["monicavergaray", "enriquevergaray", "monicaescobar"],
    },
    {
      nombre: "monicavergaray",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["luisvergaray", "enriquevergaray", "monicaescobar"],
    },
    {
      nombre: "enriquevergaray",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["luisvergaray", "monicavergaray", "monicaescobar"],
    },
    {
      nombre: "monicaescobar",
      mensaje: "",
      respuesta: "",
      id: generarId(),
      regaloEscogido: "",
      posiblesInvitados: ["luisvergaray", "monicavergaray", "enriquevergaray"],
    },
    {
      nombre: "richardvergaray",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "cliffgarcia",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "danielherold",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "maryherold",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "aurysthelapalma",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "kresstina yousef",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "enriquelarosa",
      mensaje: "",
      respuesta: "",
      id: generarId(),
    },
  ];

  const addDataToFirebase = () => {
    /* const db = getFirestore(); */

    const collectionRef = collection(db, "invitados");

    for (let item of invitados) {
      addDoc(collectionRef, item)
        .then((res) => console.log(res.id))
        .catch((err) => console.log(err));
    }

    /* ASI SE HA CREADO LOS PRODUCTOS EN LA BASE DE DATOS */
  };
  return <button onClick={addDataToFirebase}>agregar productos</button>;
};

export default AgregarInvitados;
