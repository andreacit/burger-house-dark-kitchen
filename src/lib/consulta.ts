import { z } from "zod";

export const CLAVE_CONSULTAS = "burger-house-consultas";

export const consultaSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: "Escribe tu nombre." })
    .max(100, { message: "El nombre debe tener menos de 100 caracteres." }),
  correo: z
    .string()
    .trim()
    .min(1, { message: "Escribe tu correo electrónico." })
    .max(255, { message: "El correo debe tener menos de 255 caracteres." })
    .email({ message: "Escribe un correo válido, por ejemplo nombre@correo.com." }),
  asunto: z
    .string()
    .trim()
    .min(1, { message: "Escribe el asunto." })
    .max(150, { message: "El asunto debe tener menos de 150 caracteres." }),
  mensaje: z
    .string()
    .trim()
    .min(1, { message: "Escribe tu mensaje." })
    .max(1000, { message: "El mensaje debe tener menos de 1000 caracteres." }),
});

export type Consulta = z.infer<typeof consultaSchema>;
export type CampoConsulta = keyof Consulta;
export type ErroresConsulta = Partial<Record<CampoConsulta, string>>;

export function validarConsulta(
  valores: Consulta,
): { ok: true; datos: Consulta } | { ok: false; errores: ErroresConsulta } {
  const resultado = consultaSchema.safeParse(valores);
  if (resultado.success) return { ok: true, datos: resultado.data };
  const errores: ErroresConsulta = {};
  for (const issue of resultado.error.issues) {
    const campo = issue.path[0] as CampoConsulta | undefined;
    if (campo && !errores[campo]) errores[campo] = issue.message;
  }
  return { ok: false, errores };
}

/** Guarda la consulta en el almacenamiento del navegador. Lanza un error si falla. */
export function guardarConsulta(datos: Consulta, almacen: Storage = window.localStorage): void {
  const previas = almacen.getItem(CLAVE_CONSULTAS);
  const lista: unknown = previas ? JSON.parse(previas) : [];
  const consultas = Array.isArray(lista) ? lista : [];
  consultas.push({ ...datos, fecha: new Date().toISOString() });
  almacen.setItem(CLAVE_CONSULTAS, JSON.stringify(consultas));
}
