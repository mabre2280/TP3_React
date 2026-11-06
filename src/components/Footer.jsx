export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-800">
      <div className="mx-auto grid max-w-7xl items-center gap-4 px-4 py-6 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Izquierda: identidad (misma que el Header) */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-blue-600 font-mono text-xl font-black text-white shadow-lg shadow-cyan-500/20">
            T
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Tech<span className="text-cyan-400">Connect</span>
          </span>
        </div>

        {/* Centro: descripción */}
        <p className="text-sm leading-relaxed text-slate-400 md:text-center">
          La plataforma para descubrir charlas, talleres y hackathons de
          tecnología.
        </p>

        {/* Derecha: copyright */}
        <p className="text-sm text-slate-500 md:text-right">
          © {new Date().getFullYear()} TechConnect. Proyecto integrador de
          Programación Web Avanzada.
        </p>
      </div>
    </footer>
  );
}