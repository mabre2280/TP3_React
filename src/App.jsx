import Header from "./components/Header";
import Hero from "./components/Hero";
import EventCard from "./components/EventCard";
import CategoryList from "./components/CategoryList";
import EventList from "./components/EventList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import { categories } from "./data/events";
import { events } from "./data/events";
import Footer from "./components/Footer";


export default function App() {
  
  const [categoriaSeleccionada, setcategoriaSeleccionada] = useState("Todos");
  const [busqueda, setbusqueda] = useState("");

  
    const textoBusqueda = (busqueda.trim()).toLowerCase();

  const eventosFiltrados = events.filter((event) => {
    const matchCategorias = categoriaSeleccionada === "Todos" || event.category === categoriaSeleccionada;
    const matchBusquedas = ((event.title).toLowerCase()).includes(textoBusqueda);

    return matchCategorias && matchBusquedas;
  });



  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main>
        <Hero/>
         <SearchBar value={busqueda} onChange={setbusqueda}/>
        <CategoryList
          categorias={categories}
          categoriaSeleccionada={categoriaSeleccionada}
          onSelectCategory={setcategoriaSeleccionada}
        />
       

        <EventList events={eventosFiltrados} />
      </main>
      <Footer/>
    </div>
  );
}
