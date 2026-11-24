import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

import type { Producto } from "@/data/productos";
import { cn } from "@/lib/utils";

export function TarjetaProducto({ producto }: { producto: Producto }) {
  const [abierto, setAbierto] = useState(false);
  const idDetalles = useId();

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
      <img
        src={producto.imagen}
        alt={producto.textoAlternativo}
        width={720}
        height={720}
        loading="lazy"
        decoding="async"
        className="aspect-[4/3] w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-wide">
          {producto.nombre}
        </h3>
        <p className="text-sm text-muted-foreground">{producto.descripcion}</p>

        <div
          id={idDetalles}
          hidden={!abierto}
          className="rounded-md border border-border bg-muted p-3 text-sm leading-relaxed"
        >
          {producto.detalles}
        </div>

        <button
          type="button"
          aria-expanded={abierto}
          aria-controls={idDetalles}
          onClick={() => setAbierto((v) => !v)}
          className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          {abierto ? "Ocultar detalles" : "Ver detalles"}
          <ChevronDown
            aria-hidden="true"
            className={cn("size-4 transition-transform", abierto && "rotate-180")}
          />
        </button>
      </div>
    </article>
  );
}
