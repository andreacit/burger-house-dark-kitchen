import { negocio } from "@/data/negocio";

export function Cabecera() {
  return (
    <header className="border-b border-border bg-header px-safe pt-[max(1.25rem,env(safe-area-inset-top))] pb-5">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-display text-3xl font-semibold uppercase leading-none tracking-wide text-foreground sm:text-4xl">
          {negocio.nombre}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{negocio.lema}</p>
      </div>
    </header>
  );
}
