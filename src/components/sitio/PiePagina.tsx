import { negocio } from "@/data/negocio";

/** Pie de página. Personalízalo libremente. */
export function PiePagina() {
  return (
    <footer className="border-t border-border bg-header px-safe pt-6 pb-safe">
      <div className="mx-auto max-w-6xl">
        <p className="text-center font-display text-lg font-semibold uppercase tracking-wide sm:text-left">
          {negocio.nombre}
        </p>

        <div className="mt-6 flex flex-col items-center gap-6 border-t border-border pt-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          <img
            src="/cucei.svg"
            alt="Escudo de CUCEI"
            className="h-20 w-auto shrink-0"
            loading="lazy"
          />
          <dl className="space-y-1 text-sm text-muted-foreground">
            <div>
              <dt className="sr-only">Autora</dt>
              <dd className="font-semibold text-foreground">Andrea Citlalli Andrade Rico</dd>
            </div>
            <div>
              <dt className="sr-only">Materia</dt>
              <dd>Desarrollo de aplicaciones web en la nube y móviles</dd>
            </div>
            <div>
              <dt className="sr-only">Profesor</dt>
              <dd>Profesor: Mtro. Zeus Cobián</dd>
            </div>
            <div>
              <dt className="sr-only">Calendario escolar</dt>
              <dd>Calendario escolar: 2026B</dd>
            </div>
          </dl>
        </div>
      </div>
    </footer>
  );
}
