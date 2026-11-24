import { useState, type ChangeEvent, type FormEvent } from "react";

import {
  guardarConsulta,
  validarConsulta,
  type CampoConsulta,
  type Consulta,
  type ErroresConsulta,
} from "@/lib/consulta";
import { cn } from "@/lib/utils";

const VACIO: Consulta = { nombre: "", correo: "", asunto: "", mensaje: "" };

type Estado = { tipo: "exito" | "error"; texto: string } | null;

const campos: { nombre: CampoConsulta; etiqueta: string; tipo?: string; autoComplete?: string }[] =
  [
    { nombre: "nombre", etiqueta: "Nombre", autoComplete: "name" },
    { nombre: "correo", etiqueta: "Correo electrónico", tipo: "email", autoComplete: "email" },
    { nombre: "asunto", etiqueta: "Asunto" },
  ];

const claseCampo =
  "w-full rounded-md border border-input bg-field px-3 py-2.5 text-base text-foreground placeholder:text-muted-foreground focus-visible:border-ring";

export function FormularioConsulta() {
  const [valores, setValores] = useState<Consulta>(VACIO);
  const [errores, setErrores] = useState<ErroresConsulta>({});
  const [estado, setEstado] = useState<Estado>(null);

  function cambiar(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const campo = e.target.name as CampoConsulta;
    setValores((v) => ({ ...v, [campo]: e.target.value }));
    if (errores[campo]) setErrores((er) => ({ ...er, [campo]: undefined }));
  }

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado(null);
    const resultado = validarConsulta(valores);
    if (!resultado.ok) {
      setErrores(resultado.errores);
      const primero = (Object.keys(resultado.errores) as CampoConsulta[])[0];
      if (primero) document.getElementById(`campo-${primero}`)?.focus();
      return;
    }
    setErrores({});
    try {
      guardarConsulta(resultado.datos);
      setValores(VACIO);
      setEstado({ tipo: "exito", texto: "Consulta de prueba guardada en este dispositivo" });
    } catch {
      setEstado({
        tipo: "error",
        texto:
          "No se pudo guardar la consulta en este dispositivo. Revisa que el navegador permita el almacenamiento local e inténtalo de nuevo.",
      });
    }
  }

  function propsError(campo: CampoConsulta) {
    const error = errores[campo];
    return {
      "aria-invalid": error ? true : undefined,
      "aria-describedby": error ? `error-${campo}` : undefined,
    };
  }

  function mensajeError(campo: CampoConsulta) {
    const error = errores[campo];
    if (!error) return null;
    return (
      <p id={`error-${campo}`} className="mt-1.5 text-sm text-destructive">
        {error}
      </p>
    );
  }

  return (
    <section
      aria-labelledby="titulo-consulta"
      className="border-t border-border px-safe py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-[560px]">
        <h2
          id="titulo-consulta"
          className="font-display text-3xl font-semibold uppercase tracking-wide sm:text-4xl"
        >
          Envíanos una consulta
        </h2>
        <p className="mt-3 rounded-md border border-border bg-muted px-4 py-3 text-sm text-muted-foreground">
          Demostración académica. Usa datos ficticios. Las consultas se guardan solo en este
          dispositivo y no se envían al negocio.
        </p>

        <form
          noValidate
          onSubmit={enviar}
          className="mt-6 space-y-5 rounded-lg border border-border bg-card p-5 sm:p-6"
        >
          {campos.map((c) => (
            <div key={c.nombre}>
              <label htmlFor={`campo-${c.nombre}`} className="mb-1.5 block font-semibold">
                {c.etiqueta} <span aria-hidden="true" className="text-accent">*</span>
              </label>
              <input
                id={`campo-${c.nombre}`}
                name={c.nombre}
                type={c.tipo ?? "text"}
                autoComplete={c.autoComplete}
                required
                value={valores[c.nombre]}
                onChange={cambiar}
                className={cn(claseCampo, errores[c.nombre] && "border-destructive")}
                {...propsError(c.nombre)}
              />
              {mensajeError(c.nombre)}
            </div>
          ))}

          <div>
            <label htmlFor="campo-mensaje" className="mb-1.5 block font-semibold">
              Mensaje <span aria-hidden="true" className="text-accent">*</span>
            </label>
            <textarea
              id="campo-mensaje"
              name="mensaje"
              rows={4}
              required
              value={valores.mensaje}
              onChange={cambiar}
              className={cn(claseCampo, "resize-y", errores.mensaje && "border-destructive")}
              {...propsError("mensaje")}
            />
            {mensajeError("mensaje")}
          </div>

          <p className="text-xs text-muted-foreground">
            <span aria-hidden="true" className="text-accent">*</span> Todos los campos son
            obligatorios.
          </p>

          <button
            type="submit"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
          >
            Guardar consulta
          </button>

          <div aria-live="polite" role="status">
            {estado && (
              <p
                className={cn(
                  "rounded-md border px-4 py-3 text-sm font-semibold",
                  estado.tipo === "exito"
                    ? "border-success/40 text-success"
                    : "border-destructive/50 text-destructive",
                )}
              >
                {estado.texto}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
