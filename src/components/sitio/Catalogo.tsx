import { productos } from "@/data/productos";
import { TarjetaProducto } from "./TarjetaProducto";

export function Catalogo() {
  return (
    <section aria-labelledby="titulo-catalogo" className="px-safe py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <h2
          id="titulo-catalogo"
          className="font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl"
        >
          Productos de muestra
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productos.map((producto) => (
            <li key={producto.id} className="flex">
              <TarjetaProducto producto={producto} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
