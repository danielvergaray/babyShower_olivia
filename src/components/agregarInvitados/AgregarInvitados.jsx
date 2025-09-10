import React from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const AgregarInvitados = () => {
  const generarId = () => {
    return String(Math.floor(100000 + Math.random() * 900000));
  };

  const invitados = [
    {
      nombre: "aimikomori",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["maritzaarzubiaga", "akiokomori"],
    },
    {
      nombre: "akiokomori",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "alexanderhuertas",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "carollopez",
      respuesta: "",
      id: generarId(),
    },

    {
      nombre: "lizflores",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "natalysilva",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "nathaliemendieta",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "priscilacarazas",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["enriquelarosa", "cesarcarazas", "patriciaelorreaga"],
    },
    {
      nombre: "cesarcarazas",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["patriciaelorreaga"],
    },
    {
      nombre: "patriciaelorreaga",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["cesarcarazas"],
    },
    {
      nombre: "enriquelarosa",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["priscilacarazas"],
    },
    {
      nombre: "abrilcarazas",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["josearias", "cesarcarazas", "patriciaelorreaga"],
    },
    {
      nombre: "josearias",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["abrilcarazas"],
    },
    {
      nombre: "rosacarcamo",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "ruthmerino",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "alonsogarrido",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: [
        "mariaferoullon",
        "lunagarrido",
        "noahgarrido",
        "liamgarrido",
      ],
    },
    {
      nombre: "mariaferoullon",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: [
        "lunagarrido",
        "alonsogarrido",
        "noahgarrido",
        "liamgarrido",
      ],
    },
    {
      nombre: "lunagarrido",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: [
        "mariaferoullon",
        "alonsogarrido",
        "noahgarrido",
        "liamgarrido",
      ],
    },
    {
      nombre: "noahgarrido",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "liamgarrido",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "claudiacardenas",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: [
        "danielvillaverde",
        "sebastianvillaverde",
        "aitanavillaverde",
      ],
    },
    {
      nombre: "danielvillaverde",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: [
        "claudiacardenas",
        "sebastianvillaverde",
        "aitanavillaverde",
      ],
    },
    {
      nombre: "sebastianvillaverde",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: [
        "claudiacardenas",
        "danielvillaverde",
        "aitanavillaverde",
      ],
    },
    {
      nombre: "aitanavillaverde",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "maritzaarzubiaga",
      respuesta: "",
      id: generarId(),
    },

    {
      nombre: "ofeliaarzubiaga",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "luisvergaray",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: [
        "enriquevergaray",
        "monicaescobar",
        "wendyterry",
        "madisonvergaray",
      ],
    },
    {
      nombre: "monicavergaray",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["enriquevergaray", "monicaescobar"],
    },
    {
      nombre: "enriquevergaray",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["monicaescobar"],
    },
    {
      nombre: "monicaescobar",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["enriquevergaray"],
    },
    {
      nombre: "madisonvergaray",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "wendyterry",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["luisvergaray", "madisonvergaray"],
    },
    {
      nombre: "aurysthelapalma",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["josemarino", "auramarinamarino"],
    },

    {
      nombre: "hilaryespinoza",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "josemarino",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["aurysthelapalma", "auramarinamarino"],
    },
    {
      nombre: "auramarinamarino",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["aurysthelapalma", "josemarino"],
    },

    {
      nombre: "fabricioenriquez",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["claudiazapata"],
    },
    {
      nombre: "claudiazapata",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["fabricioenriquez"],
    },
    {
      nombre: "santiagobalvin",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "pamelatorres",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["renzoortega", "fernandaortega"],
    },
    {
      nombre: "renzoortega",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["pamelatorres", "fernandaortega"],
    },
    {
      nombre: "fernandaortega",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "diegosanz",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "alonsovigo",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "jemimajange",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "isaacjange",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "heathersuzuki",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["kenzisuzuki", "camilasuzuki", "loghansuzuki"],
    },
    {
      nombre: "kenzisuzuki",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["heathersuzuki", "camilasuzuki", "loghansuzuki"],
    },
    {
      nombre: "camilasuzuki",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "loghansuzuki",
      respuesta: "",
      id: generarId(),
    },
    {
      nombre: "paolareano",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["haroldreano"],
    },
    {
      nombre: "haroldreano",
      respuesta: "",
      id: generarId(),
      posiblesInvitados: ["paolareano"],
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
