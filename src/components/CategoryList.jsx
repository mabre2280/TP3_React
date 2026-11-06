import CategoryCard from "./CategoryCard";

export default function CategoryList({
  categorias,
  categoriaSeleccionada,
  onSelectCategory,
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Explorá por categoría
      </h2>

      {/* En celular se desplaza horizontalmente; desde sm se acomoda en varias filas */}
      <div className="flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
        {categorias.map((category) => (
          <CategoryCard
            key={category.id}
            icon={category.icon}
            name={category.name}
            isActive={categoriaSeleccionada === category.name}
            onSelect={onSelectCategory}
          />
        ))}
      </div>
    </section>
  );
}