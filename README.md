# TechConnect

Plataforma web para la publicación y el descubrimiento de eventos de tecnologicos: charlas, talleres, hackathons, conferencias y meetups.

Proyecto integrador de la materia **Programación Web Avanzada** (Tecnicatura Universitaria en Desarrollo Web). Este repositorio corresponde al **Trabajo Práctico N.º 3**

## Integrantes

- Breide Marcos
- Leg: FAI-5695

## Descripción del proyecto

TechConnect reúne en un solo lugar los próximos eventos de la comunidad tecnológica. El usuario puede explorar el listado, filtrar por categoría y buscar por nombre para encontrar rápidamente lo que le interesa.

### Funcionalidades de esta entrega

- Pantalla principal con Header, Hero, categorías, buscador y listado de eventos, cada uno como componente independiente.
- Listado de eventos generado dinámicamente con `map()` a partir de un array de datos local.
- Tarjetas de evento reutilizables que muestran imagen, categoría, título, descripción, fecha, ubicación, precio y un botón "Ver evento".
- **Filtro por categoría** con la opción "Todos" para volver a ver el listado completo.
- **Buscador por nombre** que filtra mientras se escribe, sin distinguir mayúsculas.
- Filtro y buscador funcionan **en conjunto**, a partir de una única lista derivada del estado.
- Diseño **responsive**: el listado pasa de 1 columna en celular, a 2 en tablet y 3 en escritorio.


## Tecnologías utilizadas

- [React]: construcción de la interfaz con componentes, props y `useState`.
- [Vite]: entorno de desarrollo y empaquetado.
- [Tailwind CSS v4]: estilos, mediante el plugin `@tailwindcss/vite`.
- JavaScript y JSX.

## Instrucciones de ejecución

### Requisitos

- [Node.js](https://nodejs.org/) (versión LTS) y npm.

### Pasos

1. Clonar el repositorio:

   ```bash
   git clone <URL-DEL-REPOSITORIO>
   cd <NOMBRE-DE-LA-CARPETA>
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador la dirección que muestra la terminal (normalmente `http://localhost:5173`).



## Estructura del proyecto

```
public/
└── images/             # Imágenes de los eventos y del Hero
src/
├── components/
│   ├── CategoryCard.jsx   # Botón de una categoría
│   ├── CategoryList.jsx   # Lista de categorías (map sobre el array)
│   ├── EventCard.jsx      # Tarjeta reutilizable de un evento
│   ├── EventList.jsx      # Listado de eventos (map con key)
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   └── SearchBar.jsx      # Campo de búsqueda controlado
├── data/
│   └── events.js          # Array de eventos y de categorías
├── App.jsx                # Estado (categoría y búsqueda) y composición
├── index.css              # Importación de Tailwind CSS
└── main.jsx
```

## Decisiones de diseño

- **Una sola fuente de verdad:** `App.jsx` guarda únicamente la categoría seleccionada y el texto de búsqueda. La lista de eventos visibles se calcula a partir de ellos con `filter()`, sin mantener listados duplicados.
- **Componentes reutilizables:** `EventCard` y `CategoryCard` reciben todo por props, y la lógica de filtrado vive en `App`, que es quien tiene el estado.
- **Datos locales:** los eventos son ficticios y están en `src/data/events.js`. Las fechas usan formato ISO y los precios son números (`0` se muestra como "Gratis").

