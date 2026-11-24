import { ExternalLink, MapPin } from "lucide-react";

import { negocio } from "@/data/negocio";
import { cn } from "@/lib/utils";

export function UbicacionHorarios() {
  return (
    <section
      aria-labelledby="titulo-ubicacion"
      className="border-t border-border px-safe py-12 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="titulo-ubicacion"
          className="font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl"
        >
          Ubicación y horarios
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-display text-xl font-semibold uppercase tracking-wide">
              <MapPin aria-hidden="true" className="size-5 text-accent" />
              Dirección
            </h3>
            <address className="mt-3 not-italic">{negocio.direccion}</address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={negocio.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 py-2 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Cómo llegar
                <ExternalLink aria-hidden="true" className="size-4" />
                <span className="sr-only">(abre Google Maps en otra pestaña)</span>
              </a>
              <a
                href={negocio.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-md border border-input px-5 py-2 font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Facebook
                <ExternalLink aria-hidden="true" className="size-4" />
                <span className="sr-only">(abre en otra pestaña)</span>
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-xl font-semibold uppercase tracking-wide">
              Horarios
            </h3>
            <dl className="mt-3 divide-y divide-border">
              {negocio.horarios.map((h) => (
                <div key={h.dias} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3">
                  <dt className="font-semibold">{h.dias}</dt>
                  <dd
                    className={cn(
                      "text-muted-foreground",
                      "cerrado" in h && h.cerrado && "text-accent",
                    )}
                  >
                    {h.horario}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
