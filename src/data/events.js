// src/data/events.js

// Categorías de la plataforma.
// "Todos" va primero: es la opción que quita el filtro (consigna 10).
// El campo "name" debe coincidir exactamente con el "category" de cada evento.

export const categories = [
  { id: "todos", name: "Todos", icon: "🌐" },
  { id: "hackathons", name: "Hackathons", icon: "🏆" },
  { id: "charlas", name: "Charlas", icon: "🎤" },
  { id: "talleres", name: "Talleres", icon: "🛠️" },
  { id: "conferencias", name: "Conferencias", icon: "🎓" },
  { id: "meetups", name: "Meetups", icon: "🤝" },
];
{/*export const categories = [
  { id: "todos", name: "Todos" },
  { id: "hackathons", name: "Hackathons" },
  { id: "charlas", name: "Charlas" },
  { id: "talleres", name: "Talleres" },
  { id: "conferencias", name: "Conferencias" },
  { id: "meetups", name: "Meetups" },
];*/}

// Eventos de ejemplo (ficticios).
// - date: formato ISO (AAAA-MM-DD) para poder formatearlo y ordenarlo después.
// - price: número en pesos argentinos. 0 significa gratis.
// - image: imágenes de ejemplo; se pueden reemplazar por las propias en /public.
export const events = [
  {
    id: 1,
    title: "Hackathon de Inteligencia Artificial",
    description:
      "48 horas para armar en equipo un prototipo que use IA para resolver un problema real. Incluye mentores y premios.",
    category: "Hackathons",
    date: "2026-11-14",
    location: "Buenos Aires",
    image: "/images/events/hackathon_ia.webp",
    price: 0,
  },
  {
    id: 2,
    title: "React Conf Argentina",
    description:
      "Un día completo de charlas sobre React, rendimiento y arquitectura de aplicaciones con speakers de la región.",
    category: "Conferencias",
    date: "2026-11-21",
    location: "Córdoba",
    image: "/images/events/react_conf_argentina.webp",
    price: 45000,
  },
  {
    id: 3,
    title: "Git y GitHub desde cero",
    description:
      "Aprendé a versionar tu código, trabajar con ramas y colaborar mediante pull requests. Ideal para quienes recién empiezan.",
    category: "Talleres",
    date: "2026-11-18",
    location: "Online",
    image: "/images/events/taller_git_github.webp",
    price: 0,
  },
  {
    id: 4,
    title: "Meetup de Node.js",
    description:
      "Encuentro mensual de la comunidad con dos charlas relámpago sobre APIs y herramientas del ecosistema Node.js.",
    category: "Meetups",
    date: "2026-11-12",
    location: "Rosario",
    image: "/images/events/meetup_nodejs.webp",
    price: 0,
  },
  {
    id: 5,
    title: "Introducción a la ciberseguridad",
    description:
      "Charla abierta sobre las amenazas más comunes en aplicaciones web y buenas prácticas para prevenirlas.",
    category: "Charlas",
    date: "2026-11-25",
    location: "Mendoza",
    image: "/images/events/charla_ciberseguridad.webp",
    price: 0,
  },
  {
    id: 6,
    title: "Tailwind CSS y diseño responsive",
    description:
      "Taller práctico para construir interfaces adaptables a celular, tablet y escritorio usando clases utilitarias.",
    category: "Talleres",
    date: "2026-12-02",
    location: "Online",
    image: "/images/events/taller_tailwind_responsive.webp",
    price: 8000,
  },
  {
    id: 7,
    title: "Game Jam Patagonia",
    description:
      "Crea un videojuego completo en un fin de semana a partir de una temática sorpresa. Equipos de hasta cuatro personas.",
    category: "Hackathons",
    date: "2026-12-05",
    location: "La Plata",
    image: "/images/events/game_jam_patagonia.webp",
    price: 5000,
  },
  {
    id: 8,
    title: "Cloud para principiantes",
    description:
      "Charla introductoria sobre servidores, contenedores y servicios en la nube, con ejemplos de despliegue de una app.",
    category: "Charlas",
    date: "2026-12-09",
    location: "Online",
    image: "/images/events/charla_cloud_principiantes.webp",
    price: 0,
  },
  {
    id: 9,
    title: "DevOps Day",
    description:
      "Jornada sobre integración continua, automatización y monitoreo, con casos reales de equipos de desarrollo.",
    category: "Conferencias",
    date: "2026-12-12",
    location: "Buenos Aires",
    image: "/images/events/devops_day.webp",
    price: 60000,
  },
  {
    id: 10,
    title: "Meetup de Python y Datos",
    description:
      "Espacio para compartir proyectos de análisis de datos y automatización con Python. Abierto a todos los niveles.",
    category: "Meetups",
    date: "2026-12-16",
    location: "Tucumán",
    image: "/images/events/meetup_python_datos.webp",
    price: 0,
  },
];
