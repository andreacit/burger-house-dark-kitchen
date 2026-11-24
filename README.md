# Burger House

Crea una aplicación web de una sola página en español de México para Burger House Dark Kitchen, una hamburguesería de Villa Guerrero, Guadalajara. Es una demostración académica. El sitio debe adaptarse a laptop y móvil, incluido iPhone 17 Pro Max.

TECNOLOGÍAS

Usa React con TypeScript y conserva la configuración de compilación que genere Lovable. Usa CSS responsivo y organiza la cabecera, el catálogo, la ubicación y horarios, el formulario y el pie en componentes. Deja el proyecto listo para sincronizarlo con GitHub y desplegarlo desde ese repositorio en Vercel.

ESTILO VISUAL

Usa un estilo sencillo, cálido y ligeramente rústico. Combina fondo carbón, texto crema y naranja quemado para los botones principales. Usa una tipografía ligeramente condensada para el nombre del negocio y una sans serif legible para el resto. Deja espacio entre secciones y usa bordes discretos.

CABECERA

Muestra «Burger House Dark Kitchen» como título principal y debajo «Hamburguesería en Villa Guerrero, Guadalajara». Usa una cabecera compacta con fondo carbón y texto crema. Coloca el catálogo inmediatamente debajo, sin imagen de portada. Ubica el enlace «Cómo llegar» en la sección de ubicación y horarios.

CATÁLOGO

Incluye exactamente cuatro tarjetas bajo el título «Productos de muestra». Usa nombres provisionales como «Hamburguesa 1», «Hamburguesa 2», «Hamburguesa 3» y «Hamburguesa 4».

Cada tarjeta debe mostrar una imagen ilustrativa, el nombre y una descripción de una línea. Incluye un botón «Ver detalles» con una pequeña flecha que despliegue una descripción adicional dentro de la tarjeta. Cuando se abra, cambia el texto a «Ocultar detalles». El botón debe funcionar con teclado.

Guarda las cuatro imágenes como archivos independientes. Reúne los nombres, las descripciones, los detalles y las rutas de las imágenes en un solo archivo de datos para que pueda editar cada producto y sustituir su foto fácilmente.

Usa cuatro columnas en pantallas amplias, dos en pantallas intermedias y una en pantallas estrechas. Omite precios y funciones de compra.

UBICACIÓN Y HORARIOS

Dirección: C. Isla Trapani 3386, Villa Guerrero, 44987 Guadalajara, Jalisco.

- Jueves y domingo: 2:00 a 9:00 p. m.
- Viernes: 1:30 a 9:00 p. m.
- Sábado: 2:00 a 8:30 p. m.
- Lunes a miércoles: cerrado.

Incluye un enlace «Cómo llegar» a Google Maps:
https://maps.app.goo.gl/mKRDgESxJEjHEQwk6

Incluye un enlace a Facebook:
https://www.facebook.com/burgerhouseghostkitchen/

FORMULARIO DE CONSULTA

Crea un formulario de tamaño mediano, centrado, con un ancho máximo de 560 px en laptop. En móvil, usa el ancho disponible con márgenes laterales. Incluye cuatro campos obligatorios con etiquetas visibles: nombre, correo electrónico, asunto y mensaje. El área del mensaje debe tener unas cuatro líneas.

Valida los campos obligatorios y el formato del correo. Muestra los errores junto a cada campo. Si el formulario es válido, guarda la consulta en localStorage y muestra «Consulta de prueba guardada en este dispositivo». Si falla el guardado, muestra un mensaje de error. Mantén el formulario en el navegador, sin servicios de correo ni base de datos.

Incluye esta nota junto al formulario: «Demostración académica. Usa datos ficticios. Las consultas se guardan solo en este dispositivo y no se envían al negocio».

PIE DE PÁGINA

Deja un pie sencillo con el nombre del negocio, en un componente separado para que pueda personalizarlo después.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/003bfaba-e951-474b-9712-e2578b6659ca).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
