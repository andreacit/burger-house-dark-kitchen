import { describe, expect, it } from "vitest";

import { CLAVE_CONSULTAS, guardarConsulta, validarConsulta } from "@/lib/consulta";
import { productos } from "@/data/productos";

const valida = {
  nombre: "Ana Prueba",
  correo: "ana@ejemplo.com",
  asunto: "Pregunta",
  mensaje: "Hola",
};

describe("Formulario de consulta", () => {
  it("marca como obligatorios los cuatro campos", () => {
    const r = validarConsulta({ nombre: " ", correo: "", asunto: "", mensaje: "" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(Object.keys(r.errores).sort()).toEqual(["asunto", "correo", "mensaje", "nombre"]);
  });

  it("rechaza un correo con formato inválido", () => {
    const r = validarConsulta({ ...valida, correo: "ana-sin-arroba" });
    expect(r.ok).toBe(false);
    if (!r.ok) expect(r.errores.correo).toBeDefined();
  });

  it("guarda una consulta válida en localStorage", () => {
    localStorage.clear();
    guardarConsulta(valida);
    const guardadas = JSON.parse(localStorage.getItem(CLAVE_CONSULTAS) ?? "[]");
    expect(guardadas).toHaveLength(1);
    expect(guardadas[0].correo).toBe("ana@ejemplo.com");
  });

  it("lanza un error si el almacenamiento falla", () => {
    const roto = {
      getItem: () => null,
      setItem: () => {
        throw new Error("lleno");
      },
    } as unknown as Storage;
    expect(() => guardarConsulta(valida, roto)).toThrow();
  });
});

describe("Catálogo", () => {
  it("tiene exactamente cuatro productos", () => {
    expect(productos).toHaveLength(4);
  });
});
