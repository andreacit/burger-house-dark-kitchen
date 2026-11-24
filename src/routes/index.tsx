import { createFileRoute } from "@tanstack/react-router";

import { Cabecera } from "@/components/sitio/Cabecera";
import { Catalogo } from "@/components/sitio/Catalogo";
import { FormularioConsulta } from "@/components/sitio/FormularioConsulta";
import { PiePagina } from "@/components/sitio/PiePagina";
import { UbicacionHorarios } from "@/components/sitio/UbicacionHorarios";

const TITULO = "Burger House Dark Kitchen | Hamburguesería en Villa Guerrero, Guadalajara";
const DESCRIPCION =
  "Hamburguesas en Villa Guerrero, Guadalajara. Consulta productos de muestra, dirección, horarios y deja una consulta de prueba.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRIPCION },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRIPCION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <div className="flex min-h-screen flex-col">
      <Cabecera />
      <main className="flex-1">
        <Catalogo />
        <UbicacionHorarios />
        <FormularioConsulta />
      </main>
      <PiePagina />
    </div>
  );
}
