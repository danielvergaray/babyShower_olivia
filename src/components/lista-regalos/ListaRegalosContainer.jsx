import React from "react";
import ListaRegalos from "./ListaRegalos";

const ListaRegalosContainer = () => {
  const generarId = () => {
    return String(Math.floor(100000 + Math.random() * 900000));
  };

  const regalos = [
    {
      nombre: "Cuna corral",
      linkWeb:
        "https://www.falabella.com.pe/falabella-pe/product/21108050/Cuna-Colecho-Bebe-Joie-Kubbie-Sleep-Foggy-Gray/21108050",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416595/baby_shower_olivia-regalos/cuna_colecho_vsgh4j.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Saquito de dormir",
      linkWeb:
        "https://www.falabella.com.pe/falabella-pe/product/883426212/Saco-De-Dormir-Bebe-Nino-Nina-Algodon-Yamp/883426215?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416599/baby_shower_olivia-regalos/saco_dormir_hrppjy.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Mantas de algodón (x2)",
      linkWeb: "https://mumandcompany.com/products/manta-total-beige",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416596/baby_shower_olivia-regalos/manta_algodon_jsgvnx.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Mantas gruesas (x2)",
      linkWeb:
        "https://wawapima.pe/producto/manta-de-invierno-beige-carnerito/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416597/baby_shower_olivia-regalos/manta_gruesa_fctele.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Mantas de invierno (x2)",
      linkWeb: "https://moyoandme.com/products/manta-azul",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756417692/baby_shower_olivia-regalos/manta_invierno_rlv49m.png",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Sábanas (x2)",
      linkWeb:
        "https://www.mellowthebabybrand.com/products/copia-de-sabana-bajera-blanca-100-algodon-pima?_pos=4&_psq=sabana&_ss=e&_v=1.0",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416598/baby_shower_olivia-regalos/sabana_bajera_cbnh0h.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Extractor manual de leche",
      linkWeb:
        "https://www.maternelle.pe/products/medela-harmony-extractor-manual",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416595/baby_shower_olivia-regalos/extractor_leche_b19333.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Biberón Natural",
      linkWeb:
        "https://infanti.com.pe/collections/biberones-chupones-y-tetinas/products/biberon-natural-response-3-0-3oz-120ml-flow-2-0m",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416594/baby_shower_olivia-regalos/biberon__bs4xbe.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Recipientes para leche",
      linkWeb:
        "https://infanti.com.pe/products/recipiente-leche-180ml-x-5-pcs-avnt?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416598/baby_shower_olivia-regalos/recipiente_leche_aivwtd.jpg",

      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Cepillo para limpiar biberon",
      linkWeb:
        "https://infanti.com.pe/products/16020-escobilla-limpia-biberones-y-tetinas?variant=51140567400748&country=PE&currency=PEN&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&utm_source=google_ads&utm_medium=paid_cpc&utm_campaign=pmax_avent&utm_content=&utm_term=&gadid=&gad_source=1&gad_campaignid=20040388200&gbraid=0AAAAApjVbcgXeQjCFIFNPoK0WhcS4O2-h&gclid=CjwKCAjwtfvEBhAmEiwA-DsKjiGklywhTva1d6KpfeBPY4CQUjS5GANqApIVK5LrlSZCPHSzm1chlBoCX34QAvD_BwE",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416594/baby_shower_olivia-regalos/cepillo_biberon_ijolre.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Silla de comer portatil",
      linkWeb:
        "https://www.carestino.com.pe/producto/silla-de-comer-osaka-booster-gris/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416599/baby_shower_olivia-regalos/silla_comer_ajjz4j.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Babero de silicona",
      linkWeb:
        "https://versatino.com/products/babero-versatino-4?variant=46195167232224",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416593/baby_shower_olivia-regalos/babero_silicona_dmtgly.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Hombreras (3)",
      linkWeb: "https://www.babylabperu.com/product/hombreras-menta-pack-x-3/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416596/baby_shower_olivia-regalos/hombreras_r9bune.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Babitas (x3)",
      linkWeb:
        "https://www.babylabperu.com/product/babitas-sunny-garden-salmon-pack-x-3/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416593/baby_shower_olivia-regalos/babitas_dctygc.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Hamaca o soporte para Bañera",
      linkWeb:
        "https://infanti.com.pe/products/acb010-hamaca-para-banera-bubbles?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416595/baby_shower_olivia-regalos/hamacas_kwwxmi.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Toallas con capucha (x3)",
      linkWeb: "https://www.babylabperu.com/product/toalla-mush-mush-rosa/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416599/baby_shower_olivia-regalos/toallas_yx7tsi.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Cesto Organizador",
      linkWeb:
        "https://moyoandme.com/products/organizador-rectangular-gris-melange",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416597/baby_shower_olivia-regalos/organizador_tos7ab.jpg",
      link: "",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Alfombra plegable o mat",
      linkWeb:
        "https://www.carestino.com.pe/producto/alfombra-antigolpes-reversible-plegable-180x200-paseo/",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416376/baby_shower_olivia-regalos/alfombra_zjng3n.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Estuche para pañitos humedos",
      linkWeb:
        "https://infanti.com.pe/products/234151-estuche-para-panitos-humedos-gris?",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416595/baby_shower_olivia-regalos/estuche_panito_v6hnvb.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
    {
      nombre: "Cambiador de pañales portatil",
      linkWeb:
        "https://www.mellowthebabybrand.com/products/mat-mini?variant=46583534977263",
      linkImagen:
        "https://res.cloudinary.com/dcbhkxnwd/image/upload/v1756416594/baby_shower_olivia-regalos/cambiador_panales_lynjhb.jpg",
      disponible: "si",
      id: generarId(),
      comprador: "",
    },
  ];

  const textos = [
    {
      tituloPrincipal:
        "mira las opciones de esta lista. escoge y reserva el regalo que quieras darle a olivia",
      tituloReserva:
        "elegista algo muy especial, confirma si quiers reservarlo",
      botonInfo: "ver info",
      botonReservar: "reservar regalo",
      botonConfirmarReserva: "confirma reserva",
      mensajeAgradecimiento:
        "gracias por reservar este regalo. recuerda comprarlo antes del evento",
    },
  ];

  return <ListaRegalos regalos={regalos} textosArray={textos} />;
};

export default ListaRegalosContainer;
