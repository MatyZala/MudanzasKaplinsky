import {
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
} from "../assets";
import transferencia from "../assets/transferenciabancaria.png";
import medios from "../assets/medios.png";

export const footerLinks = [
  {
    title: "Acerca De MiZt-Software",
    links: [
      {
        name: "Contenido",
        link: "#",
      },
      {
        name: "Como Funciona",
        link: "#",
      },
      {
        name: "Sobre Nosotros",
        link: "#",
      },
      {
        name: "Politicas De Privacidad",
        link: "#",
      },
      {
        name: "Terminos & Servicios",
        link: "#",
      },
    ],
  },
  {
    title: "Nuestros Servicios",
    links: [
      {
        name: "Desarrollo Web",
        link: "#",
      },
      {
        name: "Desarrollo De Software",
        link: "#",
      },
      {
        name: "Desarrollo De Apps Moviles",
        link: "#",
      },
      {
        name: "Diseño Grafico",
        link: "#"
      }
    ],
  },
  {
    title: "Ayuda",
    links: [
      {
        name: "Centro De Ayuda",
        link: "#",
      },
      {
        name: "Socios",
        link: "#",
      },
      {
        name: "Sugerencias",
        link: "#",
      },
      {
        name: "FAQ´s",
        link: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/lamodernamuda/",
  },
  // {
  //   id: "social-media-2",
  //   icon: facebook,
  //   link: "https://www.facebook.com/MiZtSoftware/",
  // },
  // {
  //   id: "social-media-3",
  //   icon: twitter,
  //   link: "https://twitter.com/MiZtSoftware",
  // },
  // {
  //   id: "social-media-4",
  //   icon: linkedin,
  //   link: "https://www.linkedin.com/company/mizt-software/",
  // },
];

export const clients = [
  {
    id: "client-6",
    logo: medios,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
  {
    id: "client-5",
    logo: transferencia,
  },
];
