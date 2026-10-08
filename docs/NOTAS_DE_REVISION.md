# Notas de revisión

Este documento registra las decisiones de conversión, los pendientes y las observaciones técnicas detectadas al convertir el manual «Node.js Básico» a Markdown. **El texto original no se modificó**: toda observación se deja aquí con su ubicación y una propuesta.

## 1. Fuente y alcance

- Fuente única de verdad: `Manual_NodeJS_Basico_ilustrado_v3.docx` (suma MD5 que comienza con `3a34122b`, modificado el 7 de octubre de 2026 a las 20:24).
- Existe otra copia de la versión 3 con fechas y dirección de sede desactualizadas (no coincide con el calendario del 19 al 23 de octubre de 2026). No se usó. Tampoco se usó la versión 2.
- El Anexo 12 del manual coincide con `Fichas_Videos_NodeJS.docx` (misma lista de 50 URLs únicas y 245 líneas de texto). Solo difieren dos líneas de portada propias del archivo de fichas.
- La hoja del alumno de `Evaluacion_Diagnostica_Final_NodeJS.docx` está en `evaluacion/evaluacion-diagnostica-final.md`. La clave de respuestas y las notas de cobertura y puntuación (la sección «SOLO PARA EL INSTRUCTOR») están en `evaluacion/_clave-instructor.md`, que no se publica.

## 2. Pendientes

| N.º | Pendiente | Detalle y acción |
| --- | --- | --- |
| 1 | Figuras en SVG | No se contó con `Figuras_NodeJS_SVG.zip`. Se usan los 11 PNG de 2000 × 1500 px incrustados en el manual, extraídos sin recomprimir. Cuando haya SVG, agregarlos a `assets/figuras/` como `fig-X-Y.svg` y cambiar las referencias de `docs/` a SVG. La verificación de fidelidad lo reporta como aviso. |
| 2 | Permisos sobre la identidad institucional | Las 11 figuras muestran el texto «REDEC · UNAM FES Cuautitlán · Educación Continua FESC» (no hay logotipos oficiales). Confirmar con la institución el permiso de uso antes de publicar en abierto. |
| 3 | Titularidad de la licencia | El aviso de derechos del código MIT figura a nombre de Jesús Armando Tapia Gallegos. Confirmar si el material es institucional y ajustar `LICENSE` si corresponde. |
| 4 | Visibilidad | El repositorio se crea privado. La decisión es hacerlo público al terminar; el cambio requiere una confirmación final. |
| 5 | Clave del instructor | `evaluacion/_clave-instructor.md` está en `.gitignore`. Conservar el archivo en el equipo local; no se encuentra en GitHub. |
| 6 | Versión de Node.js | `.nvmrc` y `engines` fijan la 24 (LTS activa el 7 de octubre de 2026, según el calendario oficial). Pasa a mantenimiento el 20 de octubre de 2026 y la versión 26 será LTS el 28 de octubre de 2026: revisar después de esa fecha. El manual usa `nvm use 24` como ejemplo. |
| 7 | Etiqueta `ubuntu-latest` | El 19 de octubre de 2026 la etiqueta `ubuntu-latest` de GitHub Actions migra a Ubuntu 26. Si algún workflow falla después de esa fecha, fijar `ubuntu-24.04` en `runs-on`. |
| 8 | GitHub Pages | No se activó. Si se decide hacerlo: MkDocs Material con `mkdocs.yml` y un workflow de despliegue. En repositorios privados requiere un plan de GitHub de pago. |

## 3. Cómo se resolvieron los desajustes de estructura

La descripción del `.docx` en el encargo difería de la estructura real en estos puntos:

- Los bloques de código son tablas de una columna con una a cuatro filas, no solo de una celda. Cada fila con fondo oscuro es un bloque independiente (comando, salida de terminal o archivo): son 36 en total.
- Los cuadros «Ejercicio…» son 18: 11 tablas independientes con fondo gris y 7 filas al final de una tabla de código.
- La portada, el índice, el índice de figuras y la sección 12 (Anexo 12) están en estilo `Normal` con formato directo. Se reconstruyeron los títulos por tamaño y color: 16 pt azul como `#` o `##` y 12.5 pt verde como `###`.
- No hay fuente monoespaciada en el texto corrido, así que no se agregaron comillas invertidas en línea: el texto se conserva tal cual.
- Los hipervínculos son 51 (50 URLs únicas): la URL `https://www.youtube.com/watch?v=1hpc70_OoAg` aparece dos veces a propósito, en la ficha 4.2 y en la lista de cursos completos.

## 4. Convenciones de la conversión

- Los encabezados conservan el nivel y el texto del manual, incluida la numeración de capítulos (los capítulos 5 a 9 contienen las sesiones 1 a 5).
- Las tablas de etiquetas (ficha de la sesión y rubros de evaluación) no tienen fila de encabezado en el manual; Markdown la exige, por lo que la primera fila se usa como encabezado.
- En el código se conservan las sangrías y los saltos de línea. Las líneas que solo contenían un espacio (separadores en blanco) se dejaron vacías. Las etiquetas de lenguaje son `js`, `bash`, `json`, `html` y `text` (sesiones de terminal, `.env` y `.gitignore`), además de `jsonc` para el `launch.json` de VS Code, que lleva un comentario.
- Los caracteres con significado en Markdown dentro del texto (por ejemplo `\_\_dirname` o `\<nombre>`) se escapan con una barra invertida para que se muestren igual que en el manual.
- El manual en Word no incluye texto alternativo en las imágenes: se redactó uno descriptivo para cada figura. El pie «Figura X.Y: …» es el original.
- El índice del manual y el índice de figuras pasaron al `README.md` con enlaces. La portada también está en el README.
- La viñeta «•» escrita como texto en la lista de cursos completos del Anexo 12 se convirtió en lista de Markdown.
- El manual mezcla CommonJS y ES Modules a propósito; no se unificó. El bloque de la sección 2.2 que mezcla dos archivos en un solo cuadro se dividió en dos archivos en `ejemplos/`, cada uno con su comentario marcador original.

## 5. Código de ejemplo

Entorno de prueba: Node.js v24.14.0 en macOS. Los scripts se ejecutaron en una copia temporal. Los que requieren paquetes de terceros (red), MongoDB o claves se marcan como **no ejecutado**.

| N.º | Sesión | Sección | Lenguaje | Destino en `ejemplos/` | Verificación |
| --- | --- | --- | --- | --- | --- |
| 1 | 1 | 1.2 Instalación y versiones: NVM | `bash` | Solo en Markdown | Comandos de terminal |
| 2 | 1 | 1.3 El REPL y ejecución de archivos | `text` | Solo en Markdown | Sesión interactiva del REPL |
| 3 | 1 | 1.3 El REPL y ejecución de archivos | `js` | `ejemplos/sesion-1/hola.js` | node --check correcto; ejecutado |
| 4 | 1 | 1.3 El REPL y ejecución de archivos | `text` | Solo en Markdown | Salida de terminal |
| 5 | 1 | 1.4 Global Objects: window vs. global | `js` | `ejemplos/sesion-1/objetos-globales.js` | node --check correcto; ejecutado |
| 6 | 2 | 2.1 NPM: package.json, dependencias y scripts | `bash` | Solo en Markdown | Comandos de terminal |
| 7 | 2 | 2.1 NPM: package.json, dependencias y scripts | `json` | `ejemplos/sesion-2/package-ejemplo.json` | JSON válido; no es ejecutable |
| 8 | 2 | 2.2 CommonJS vs. ES Modules | `js` | `ejemplos/sesion-2/commonjs/matematica.js`<br>`ejemplos/sesion-2/commonjs/app.js` | node --check correcto (2 archivos); ejecutado: imprime 5 |
| 9 | 2 | 2.2 CommonJS vs. ES Modules | `js` | `ejemplos/sesion-2/esm/matematica.mjs`<br>`ejemplos/sesion-2/esm/app.mjs` | node --check correcto (2 archivos); ejecutado: imprime 5 |
| 10 | 2 | 2.3 Módulos core esenciales: Path, FS y OS | `js` | `ejemplos/sesion-2/path-ejemplo.js` | node --check correcto; ejecutado |
| 11 | 2 | 2.3 Módulos core esenciales: Path, FS y OS | `js` | `ejemplos/sesion-2/fs-ejemplo.js` | node --check correcto; ejecutado (crea nota.txt en el directorio actual) |
| 12 | 2 | 2.3 Módulos core esenciales: Path, FS y OS | `js` | `ejemplos/sesion-2/os-ejemplo.js` | node --check correcto; ejecutado |
| 13 | 3 | 3.1 Entendiendo el Event Loop | `js` | `ejemplos/sesion-3/event-loop-orden.js` | node --check correcto; ejecutado: el orden de salida coincide con el comentario del manual |
| 14 | 3 | 3.2 Callbacks y promesas | `js` | Solo en Markdown | Fragmento: usa funciones no definidas (obtenerUsuario, obtenerPedidos, ...) |
| 15 | 3 | 3.2 Callbacks y promesas | `js` | `ejemplos/sesion-3/promesas.js` | node --check correcto; ejecutado |
| 16 | 3 | 3.2 Callbacks y promesas | `js` | Solo en Markdown | Fragmento: usa funciones no definidas (obtenerPedidos, obtenerNotificaciones) |
| 17 | 3 | 3.3 EventEmitter | `js` | `ejemplos/sesion-3/event-emitter-tienda.js` | node --check correcto; ejecutado |
| 18 | 3 | 3.4 Streams y Buffers (introducción) | `js` | `ejemplos/sesion-3/streams-lectura.js` | node --check correcto; ejecutado con un archivo de prueba generado (ver observación 5) |
| 19 | 4 | 4.1 Módulo HTTP: servidor básico sin frameworks | `js` | `ejemplos/sesion-4/servidor-http.js` | node --check correcto; ejecutado: / y /saludo responden 200 y una ruta inexistente responde 404 |
| 20 | 4 | 4.2 Introducción a Express.js | `bash` | Solo en Markdown | Comando de terminal |
| 21 | 4 | 4.2 Introducción a Express.js | `js` | `ejemplos/sesion-4/servidor-express.js` | node --check correcto; **no ejecutado**: requiere `npm install express` (red) |
| 22 | 4 | 4.3 Enrutamiento: verbos HTTP y parámetros | `js` | Solo en Markdown | Fragmento: usa `app` y `express.json()` definidos en otro bloque |
| 23 | 4 | 4.3 Enrutamiento: verbos HTTP y parámetros | `js` | Solo en Markdown | Fragmento: usa `app` y `productos` definidos en otro bloque |
| 24 | 4 | 4.4 Motores de plantillas vs. APIs | `bash` | Solo en Markdown | Comando de terminal |
| 25 | 4 | 4.4 Motores de plantillas vs. APIs | `js` | Solo en Markdown | Fragmento: usa `app` y `productos` |
| 26 | 4 | 4.4 Motores de plantillas vs. APIs | `html` | `ejemplos/sesion-4/views/reporte.ejs` | Plantilla EJS; no es ejecutable por sí sola |
| 27 | 5 | 5.1 Conexión a bases de datos: MongoDB (Mongoose) o SQLite | `bash` | Solo en Markdown | Comando de terminal |
| 28 | 5 | 5.1 Conexión a bases de datos: MongoDB (Mongoose) o SQLite | `js` | Solo en Markdown | Fragmento: usa `app`; **no ejecutado**, requiere MongoDB y la variable `MONGODB_URI` |
| 29 | 5 | 5.1 Conexión a bases de datos: MongoDB (Mongoose) o SQLite | `bash` | Solo en Markdown | Comando de terminal |
| 30 | 5 | 5.1 Conexión a bases de datos: MongoDB (Mongoose) o SQLite | `js` | Solo en Markdown | Fragmento: usa `app`; **no ejecutado**, requiere el paquete `better-sqlite3` (red) |
| 31 | 5 | 5.2 Variables de entorno con dotenv | `bash` | Solo en Markdown | Comando de terminal |
| 32 | 5 | 5.2 Variables de entorno con dotenv | `text` | Solo en Markdown | Ejemplo de archivo `.env` con credenciales ficticias; se deja solo en Markdown para evitar falsos positivos de escáneres de secretos |
| 33 | 5 | 5.2 Variables de entorno con dotenv | `js` | Solo en Markdown | Fragmento: usa `app`; **no ejecutado**, requiere `dotenv` (red) |
| 34 | 5 | 5.2 Variables de entorno con dotenv | `text` | Solo en Markdown | Ejemplo de `.gitignore` |
| 35 | 5 | 5.3 Debugging: herramientas de inspección | `bash` | Solo en Markdown | Comandos de terminal |
| 36 | 5 | 5.3 Debugging: herramientas de inspección | `jsonc` | `ejemplos/sesion-5/vscode-launch.jsonc` | Configuración de VS Code; no es ejecutable |

Resumen: 36 bloques en el manual, 16 extraídos a `ejemplos/` (18 archivos, porque 2 bloques se dividieron) y 20 que se quedan solo en Markdown (comandos, salidas o fragmentos). De los 15 archivos `.js` y `.mjs`, los 15 pasan `node --check` y 14 se ejecutaron; `servidor-express.js` no se ejecutó.

## 6. Observaciones técnicas del manual (sin corregir)

1. **Sección 1.1, tilde:** «libreria libuv» debería ser «librería libuv».
2. **Sección 1.2, versión de NVM:** el comando de instalación usa `nvm` v0.40.0; la última versión publicada al 7 de octubre de 2026 es v0.40.8. Propuesta: actualizar la URL o indicar que se consulte la versión vigente.
3. **Sección 2.1 y Figura 2.1, versión de Express:** el `package.json` de ejemplo fija `express ^4.19.2`, pero `npm install express` instala hoy la versión 5.2.1 (la última 4.x es 4.22.3). Propuesta: indicar la versión mayor que se usará en el curso (por ejemplo `npm install express@4`) o actualizar el material a la 5, y probar los ejemplos con la elegida. Conviene revisar de igual forma las versiones de Mongoose, `dotenv`, `ejs` y `better-sqlite3` antes del curso.
4. **Sección 4.3, orden de las rutas:** el primer bloque declara `/productos/:id` y el segundo, mostrado aparte, declara `/productos/buscar`. Si se combinan en ese orden, la ruta `buscar` queda tapada por `:id`. Propuesta: aclarar que `/productos/buscar` debe declararse antes.
5. **Sección 3.4, manejo de errores en streams:** en el ejemplo, el segundo `fs.createReadStream('archivo-grande.log').pipe(escritor)` no tiene un listener `error`. Si el archivo no existe, el primer stream muestra el error pero el segundo termina el proceso con un evento `error` no controlado (comprobado). Propuesta: agregar un listener `error` o usar `stream.pipeline`.
6. **Sección 3.1 y Figura 3.1:** el texto enumera cinco fases «entre ellas» y la figura representa seis; la fase «Idle / Prepare» solo aparece en la figura.
7. **Títulos dentro de las figuras:** en cuatro figuras el número del encabezado de la imagen no coincide con la sección donde se inserta: la Figura 3.2 dice «3.2 Streams y Buffers» y está en la 3.4; la Figura 4.1 dice «4.1 Canal de middlewares» y está en la 4.2; la Figura 4.2 dice «4.2 Enrutamiento y API REST» y está en la 4.3; la Figura 5.2 dice «5.2 Flujo de despliegue continuo» y está en la 5.4.
8. **Puntos de la «Evaluación final» (20 puntos):** la sección 3 los asigna a la evaluación final; la sección 10 dice que el proyecto integrador es la base de esa evaluación final; la evaluación escrita de 10 reactivos indica que sus aciertos valen los 20 puntos del rubro «Evaluación final». Además, el cierre de la Sesión 5 menciona «Evaluación final y entrega del proyecto integrador». Propuesta: aclarar cómo se compone el rubro.
9. **Sesión 5 sin ejercicio integrador propio:** las sesiones 1 a 4 terminan con un «Ejercicio integrador»; la sesión 5 usa el proyecto integrador del capítulo 10 en su lugar. La Actividad 5 de las fichas lo confirma.
10. **Enlace móvil:** el video de «Node.js "Event Emitters" Explained» usa la URL `https://m.youtube.com/live/wINRm5arVlM` (versión móvil con ruta `live`). Se conservó tal cual; responde correctamente.
11. **Cadena de conexión de ejemplo:** `mongodb+srv://usuario:password@cluster.mongodb.net/curso` y `JWT_SECRET=una-clave-larga-y-secreta` son valores ficticios del manual, no credenciales.

## 7. Verificación de enlaces

- Comprobación manual del 7 de octubre de 2026 con el endpoint oEmbed de YouTube: las 50 URLs de YouTube (47 videos y 3 listas de reproducción, incluida la lista no listada del curso) respondieron correctamente.
- Primera ejecución de `enlaces.yml` en GitHub (8 de octubre de 2026, UTC): lychee reportó 50 enlaces correctos, 0 errores, 51 excluidos (los de YouTube, que cubre el paso oEmbed) y 1 con un esquema que no soporta (no es un error). El paso oEmbed no emitió ninguna advertencia.
- Aun así, los videos pueden retirarse con el tiempo y varios tienen años de antigüedad, como advierte la nota de curaduría del Anexo 12. El workflow `enlaces.yml` repite la comprobación cada lunes y bajo demanda, sin bloquear, y publica un resumen.

## 8. Privacidad y publicación

- Antes del primer push se revisó que el repositorio no contenga secretos, correos ni teléfonos personales, tokens ni rutas locales.
- Los `.docx` fuente no se publican (`fuentes/` está en `.gitignore`): contienen metadatos de edición. Los PNG de las figuras no traen metadatos de texto.
- Los commits usan la dirección `noreply` de GitHub.
- La nota de divulgación del uso de Claude está en el `README.md`.
