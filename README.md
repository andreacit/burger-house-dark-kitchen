# Burger House Dark Kitchen

Proyecto académico para la Práctica 8 de Desarrollo de aplicaciones web
en la nube y móviles. El sitio presenta el catálogo, la ubicación y los
horarios de Burger House Dark Kitchen, en Villa Guerrero, Guadalajara.

**Autora:** Andrea Citlalli Andrade Rico · 2026B

## Qué incluye el sitio

- Catálogo adaptable a laptop y móvil con cuatro productos del menú:
  La Louisiana, La Clásica, La Tapa Arterias y La Argentina de Short Rib.
- Fotografías y descripciones personalizadas. Cada tarjeta permite ampliar
  los detalles del producto.
- Horarios de atención y enlaces a Google Maps y Facebook.
- Formulario de demostración con validación de campos. Las consultas
  de prueba se guardan en `localStorage` del navegador. No se envían al negocio.
- Pie de página con los datos de la práctica y el escudo de CUCEI.

## Desarrollo

Preparé el prompt con ChatGPT a partir de la ficha del negocio en Google
Maps. Generé la primera versión en Lovable y después actualicé las imágenes,
las descripciones de los productos y el pie de página. Comprobé el guardado
del formulario en el almacenamiento local del navegador.

## Ejecución local

Con Node.js y npm instalados, clona este repositorio, abre su carpeta y ejecuta:

```bash
npm install
npm run dev
```

Abre la dirección local que indique la terminal.

## Despliegue

El repositorio está sincronizado con Lovable. El despliegue en Vercel
se realiza desde este repositorio de GitHub.
