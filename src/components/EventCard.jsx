
// Convierte "2026-11-14" en "14 nov 2026".
// Se agrega T00:00:00 para que JavaScript interprete la fecha en hora local;
// sin eso, en Argentina (UTC-3) se mostraría el día anterior.
function formatoFecha(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// 0 se muestra como "Gratis"; el resto como moneda en pesos.
function formatoPrecio(precio) {
  if (precio === 0) return "Gratis";
  return precio.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
}

export default function EventCard({
  title,
  description,
  category,
  date,
  location,
  image,
  price,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-lg transition-all hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-cyan-500/10">
      {/* Imagen + categoría */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-cyan-300 backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Titulo y Descripcion */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-white">{title}</h3>

        <p className="mt-2 line-clamp-2 text-sm text-slate-400">{description}</p>

        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 shrink-0 text-cyan-400"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            {formatoFecha(date)}
          </li>
          <li className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 shrink-0 text-cyan-400"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            {location}
          </li>
        </ul>

        {/* Precio y botón */}
        <div className="mt-auto flex items-center justify-between gap-4 pt-5">
          <span
            className={`font-mono text-lg font-bold ${
              price === 0 ? "text-emerald-400" : "text-white"
            }`}
          >
            {formatoPrecio(price)}
          </span>
          <button
            type="button"
            className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all hover:bg-cyan-500 hover:text-white active:scale-95"
          >
            Ver evento
          </button>
        </div>
      </div>
    </article>
  );
}