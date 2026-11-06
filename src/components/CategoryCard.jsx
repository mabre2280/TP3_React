export default function CategoryCard({ icon, name, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(name)}
      aria-pressed={isActive}
      className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${
        isActive
          ? "border-transparent bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
          : "border-slate-700 bg-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-white"
      }`}
    >
      <span aria-hidden="true">{icon}</span>
      {name}
    </button>
  );
}