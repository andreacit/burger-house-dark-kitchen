/** Datos generales del negocio. Edítalos aquí para actualizar todo el sitio. */
export const negocio = {
  nombre: "Burger House Dark Kitchen",
  lema: "Hamburguesería en Villa Guerrero, Guadalajara",
  direccion: "C. Isla Trapani 3386, Villa Guerrero, 44987 Guadalajara, Jalisco.",
  mapsUrl: "https://maps.app.goo.gl/mKRDgESxJEjHEQwk6",
  facebookUrl: "https://www.facebook.com/burgerhouseghostkitchen/",
  horarios: [
    { dias: "Jueves y domingo", horario: "2:00 a 9:00 p. m." },
    { dias: "Viernes", horario: "1:30 a 9:00 p. m." },
    { dias: "Sábado", horario: "2:00 a 8:30 p. m." },
    { dias: "Lunes a miércoles", horario: "Cerrado", cerrado: true },
  ],
} as const;
