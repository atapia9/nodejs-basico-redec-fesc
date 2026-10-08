# EVALUACIÓN DIAGNÓSTICA / FINAL

**REDEC · UNAM FES Cuautitlán · Educación Continua FESC**

Curso: Node.js Básico

| **Nombre** | | **Fecha** | |
| --- | --- | --- | --- |
| **Grupo / sede** | Xochimilco | **Momento** | ☐ Diagnóstica     ☐ Final |
| **Aciertos** | \_\_\_\_\_ / 10 | **Calificación** | \_\_\_\_\_ / 20 |

## Instrucciones

- Lee cada pregunta con atención y elige una sola respuesta, la más completa o adecuada.
- La evaluación consta de 10 reactivos de opción múltiple; cada uno corresponde a un tema del curso.
- En la aplicación diagnóstica no se asigna calificación: sirve para identificar el punto de partida del grupo. En la aplicación final, cada acierto vale 2 puntos (máximo 20 puntos).
- No se permite consultar documentación ni apuntes durante la aplicación.

## Reactivos

**1. ¿Cuál de las siguientes opciones describe mejor a Node.js?**

- a)  Un framework de JavaScript para construir interfaces de usuario en el navegador.
- b)  Un entorno de ejecución de JavaScript del lado del servidor, construido sobre el motor V8.
- c)  Una base de datos NoSQL orientada a documentos.
- d)  Un lenguaje de programación distinto de JavaScript, compilado a código máquina.

**2. En el navegador el objeto global es window. ¿Cuál es el objeto global equivalente en Node.js?**

- a)  document
- b)  root
- c)  global (también accesible como globalThis)
- d)  app

**3. Un proyecto tiene en su package.json la siguiente sección. ¿Qué comando ejecuta el script «dev»?**

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

- a)  npm run dev
- b)  node dev
- c)  npm install dev
- d)  npm start dev

**4. ¿Cuál afirmación sobre CommonJS y ES Modules es correcta?**

- a)  ES Modules usa require() y module.exports.
- b)  CommonJS solo funciona en el navegador.
- c)  Ambos sistemas pueden mezclarse libremente dentro del mismo archivo.
- d)  ES Modules usa import/export y se activa con la extensión .mjs o con "type": "module" en package.json.

**5. ¿En qué orden imprime este código sus mensajes?**

```js
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
```

- a)  A, B, C, D
- b)  A, D, C, B
- c)  A, D, B, C
- d)  A, C, D, B

**6. Se necesita copiar un archivo de varios GB. ¿Por qué es preferible fs.createReadStream(origen).pipe(fs.createWriteStream(destino)) frente a fs.readFileSync() seguido de fs.writeFileSync()?**

- a)  Porque es la única forma de escribir archivos en Node.js.
- b)  Porque cifra automáticamente los datos durante la copia.
- c)  Porque procesa el archivo por fragmentos (chunks), sin cargarlo completo en memoria ni bloquear el hilo principal.
- d)  Porque convierte el archivo a formato JSON antes de guardarlo.

**7. En Express, un middleware no llama a next() ni envía una respuesta al cliente. ¿Qué ocurre con la petición?**

- a)  Express responde automáticamente con código 200.
- b)  Express pasa la petición al siguiente middleware de forma automática.
- c)  Express responde con un error 404.
- d)  La petición queda sin respuesta («colgada») hasta que el cliente agota el tiempo de espera.

**8. ¿Qué combinación de método, ruta y código de estado es la más adecuada para crear una nueva tarea en una API REST?**

- a)  POST /tareas → 201 Created
- b)  GET /tareas → 201 Created
- c)  PUT /tareas/:id → 204 No Content
- d)  DELETE /tareas → 200 OK

**9. ¿Cuál es la función de un Schema (y su Model) en Mongoose?**

- a)  Levantar el servidor HTTP de la aplicación.
- b)  Definir la estructura, los tipos y las validaciones de los documentos de una colección, y ofrecer métodos como create() y find().
- c)  Cifrar la conexión con la base de datos.
- d)  Instalar y configurar MongoDB en el equipo.

**10. Al desplegar una API en Render o Railway, ¿cómo debe manejarse la cadena de conexión a la base de datos?**

- a)  Escribirla directamente en el código y subirla a GitHub para que la plataforma la encuentre.
- b)  Incluirla como un campo dentro del package.json.
- c)  Mantenerla fuera del repositorio (.env en .gitignore) y configurarla como variable de entorno en el panel de la plataforma.
- d)  Guardarla en un archivo de texto dentro de la carpeta pública del proyecto.
