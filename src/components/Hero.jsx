export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
      />

      <div className=" rounded-4xl border-3 border-slate-700 relative mt-8 mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-10 lg:grid-cols-2 lg:px-8">
        {/* Texto */}
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Charlas, talleres y hackathons y mucho mas.{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Todo en un solo lugar
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Encontrá los próximos eventos de tecnología, filtralos por categoría
            y guardá tus favoritos para no perderte ninguno.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#eventos"
              className="inline-flex items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-500 active:scale-95"
            >
              Explorar eventos
            </a>
          </div>
        </div>

        {/* Recurso visual: foto */}
        <div className="overflow-hidden rounded-2xl border border-slate-700 shadow-2xl shadow-cyan-500/10">
          <img
            src="/images/hero.webp"
            alt="Asistentes participando de un evento de tecnología"
            className="aspect-4/3 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}