/**
 * Catálogo de productos de muestra.
 *
 * Para editar un producto, cambia aquí su nombre, descripción o detalles.
 * Para sustituir una foto, reemplaza el archivo en `public/productos/`
 * (conservando el nombre) o cambia la ruta en `imagen`.
 */
export interface Producto {
  id: string;
  nombre: string;
  /** Descripción breve de una línea. */
  descripcion: string;
  /** Texto adicional que se muestra al pulsar «Ver detalles». */
  detalles: string;
  /** Ruta de la imagen dentro de la carpeta `public`. */
  imagen: string;
  /** Texto alternativo de la imagen. */
  textoAlternativo: string;
}

export const productos: Producto[] = [
  {
    id: "hamburguesa-1",
    nombre: "Hamburguesa 1",
    descripcion: "Clásica con queso cheddar, lechuga y jitomate.",
    detalles:
      "Carne de res a la plancha, queso cheddar fundido, lechuga fresca, jitomate y pan brioche tostado. Texto de muestra para la demostración.",
    imagen: "/productos/hamburguesa-1.jpg",
    textoAlternativo: "Hamburguesa con queso cheddar, lechuga y jitomate sobre una tabla de madera",
  },
  {
    id: "hamburguesa-2",
    nombre: "Hamburguesa 2",
    descripcion: "Con tocino crujiente y cebolla caramelizada.",
    detalles:
      "Carne de res, tocino crujiente, cebolla caramelizada, salsa barbecue ahumada y pan con ajonjolí. Texto de muestra para la demostración.",
    imagen: "/productos/hamburguesa-2.jpg",
    textoAlternativo: "Hamburguesa con tocino, cebolla caramelizada y salsa barbecue",
  },
  {
    id: "hamburguesa-3",
    nombre: "Hamburguesa 3",
    descripcion: "Picante con jalapeños y mayonesa de chipotle.",
    detalles:
      "Carne de res, queso con chile, rodajas de jalapeño, mayonesa de chipotle y pan oscuro. Texto de muestra para la demostración.",
    imagen: "/productos/hamburguesa-3.jpg",
    textoAlternativo: "Hamburguesa en pan oscuro con jalapeños y queso fundido",
  },
  {
    id: "hamburguesa-4",
    nombre: "Hamburguesa 4",
    descripcion: "Doble carne aplastada con pepinillos.",
    detalles:
      "Dos carnes delgadas y doradas, queso amarillo, pepinillos, cebolla y pan suave envuelto en papel. Texto de muestra para la demostración.",
    imagen: "/productos/hamburguesa-4.jpg",
    textoAlternativo: "Hamburguesa doble con queso amarillo y pepinillos envuelta en papel",
  },
];
