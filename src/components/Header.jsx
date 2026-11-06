export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-800 text-slate-100 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-cyan-500 to-blue-600 font-mono text-xl font-black text-white shadow-lg shadow-cyan-500/20">
            T
          </div>
          <span className="text-xl font-bold tracking-tight bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Tech<span className="text-cyan-400">Connect</span>
          </span>
        </div>

        {/* inicio eventos favoritos */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="text-cyan-400 transition-colors">
            Inicio
          </a>
          <a href="#eventos" className="text-slate-300 hover:text-white transition-colors">
            Eventos
          </a>
          <a href="#" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1">
            Favoritos
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-slate-800 text-[10px] font-bold text-slate-400">
              0
            </span>
          </a>
        </nav>

        {/* Botón de iniciar sesión */}
        <div className="flex items-center gap-4">
          <button className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-white transition-all active:scale-95">
            Iniciar sesión
          </button>
          
          {/* Menú para Móviles*/}
          <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white md:hidden">
            <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
}
