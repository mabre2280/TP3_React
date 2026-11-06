import EventCard from "./EventCard";

export default function EventList({ events }) {
  return (
    <section
      id="eventos"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Próximos eventos
        </h2>
        <span className="font-mono text-sm text-slate-400">
          {events.length} {events.length === 1 ? "evento" : "eventos"}
        </span>
      </div>

      {/* 1 columna en celular, 2 en tablet y 3 en escritorio */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </section>
  );
}