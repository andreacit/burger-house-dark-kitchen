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
    nombre: "Hamburguesa La Louisiana",
    descripcion: "Pollo empanizado estilo Louisiana con manchego gratinado y cebolla caramelizada.",
    detalles:
      "200 g de pollo empanizado estilo Louisiana, 50 g de queso manchego gratinado y cebolla caramelizada. Se acompaña con una ensalada servida aparte de lechuga fresca, cebolla, jitomate y aguacate. Puedes elegir pan clásico o pan con topping de hierbas finas.",
    imagen: "/productos/hamburguesa-1.jpg",
    textoAlternativo: "Hamburguesa La Louisiana",
  },
  {
    id: "hamburguesa-2",
    nombre: "Hamburguesa La Clásica",
    descripcion: "Carne de res con tocino con miel, cheddar fundido y cebolla caramelizada.",
    detalles:
      "250 g de carne de res, tocino con miel, 50 g de queso cheddar fundido y cebolla caramelizada. Se acompaña con una ensalada de lechuga fresca, cebolla, jitomate y aguacate. Puedes elegir pan clásico o pan con topping de hierbas finas.",
    imagen: "/productos/hamburguesa-2.jpg",
    textoAlternativo: "Hamburguesa La Clásica",
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
