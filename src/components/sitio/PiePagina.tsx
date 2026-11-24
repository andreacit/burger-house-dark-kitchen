import { negocio } from "@/data/negocio";

/** Pie de página. Personalízalo libremente. */
export function PiePagina() {
  return (
    <footer className="border-t border-border bg-header px-safe pt-6 pb-safe">
      <div className="mx-auto max-w-6xl text-center sm:text-left">
        <p className="font-display text-lg font-semibold uppercase tracking-wide">
          {negocio.nombre}
        </p>
      </div>
    </footer>
  );
}
