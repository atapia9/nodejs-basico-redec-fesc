# 8. Sesión 4 — Creación de Servidores Web con Express

| **Fecha** | Jueves 22 de octubre de 2026 |
| --- | --- |
| **Horario** | 09:00 a 13:00 hrs. (4 horas) |
| **Tema del cronograma** | Tema 4: Creación de Servidores Web con Express |

## Distribución de la sesión

| **Horario** | **Actividad** | **Descripción** |
| --- | --- | --- |
| **09:00–09:15** | Repaso | Repaso rápido de la Sesión 3 y resolución de dudas. |
| **09:15–09:55** | Teoría/práctica 4.1 | Módulo HTTP: creación de un servidor web básico sin frameworks. |
| **09:55–10:45** | Teoría/práctica 4.2 | Introducción a Express.js: instalación, estructura de la aplicación y el concepto de 'middleware'. |
| **10:45–11:00** | Receso | Pausa activa. |
| **11:00–12:15** | Teoría/práctica 4.3 | Enrutamiento (Routing): manejo de verbos HTTP (GET, POST, PUT, DELETE) y parámetros de URL. |
| **12:15–13:00** | Teoría/práctica 4.4 | Motores de plantillas vs. APIs: renderizado en servidor (EJS) frente a servicios REST. |

## 4.1 Módulo HTTP: servidor básico sin frameworks

Antes de usar un framework, es importante entender qué resuelve por debajo. El módulo nativo http permite crear un servidor web sin ninguna dependencia externa:

```js
const http = require('http');

const servidor = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bienvenido al servidor de Node.js puro');
  } else if (req.url === '/saludo' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: 'Hola desde la API' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

const PUERTO = 3000;
servidor.listen(PUERTO, () => {
  console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
```

Este ejemplo muestra por qué se necesitan frameworks: gestionar rutas, métodos, parseo del cuerpo de la petición y manejo de errores 'a mano' se vuelve tedioso y propenso a errores conforme crece la aplicación.

> **Ejercicio 4.1 — Servidor sin frameworks**
>
> - Crea un servidor HTTP puro con al menos tres rutas distintas (por ejemplo /, /acerca, /contacto).
> - Agrega una ruta /productos que responda con un arreglo JSON de al menos 3 productos.
> - Implementa una respuesta 404 personalizada para rutas no definidas.
> - Prueba las rutas desde el navegador y desde una herramienta como curl o Postman.

## 4.2 Introducción a Express.js

Express es el framework web minimalista más usado en el ecosistema Node.js. Simplifica el enrutamiento, el manejo de peticiones/respuestas y, sobre todo, introduce el concepto de middleware: funciones que se ejecutan en secuencia sobre cada petición antes de llegar a la ruta final, y que pueden modificar req/res o interrumpir el ciclo.

```bash
npm install express
```

```js
const express = require('express');
const app = express();

// Middleware incorporado: parsear cuerpos JSON automáticamente
app.use(express.json());

// Middleware personalizado: registro de peticiones (logger)
app.use((req, res, next) => {
  const marca = new Date().toISOString();
  console.log(`[${marca}] ${req.method} ${req.url}`);
  next(); // IMPORTANTE: cede el control al siguiente middleware/ruta
});

app.get('/', (req, res) => {
  res.send('Bienvenido a la API con Express');
});

const PUERTO = 3000;
app.listen(PUERTO, () => {
  console.log(`Servidor Express en http://localhost:${PUERTO}`);
});
```

Un middleware que no llama a next() (y tampoco envía una respuesta) deja la petición 'colgada'. Los middlewares se ejecutan en el orden en que se declaran con app.use(), lo cual es clave para el diseño de la aplicación (por ejemplo, un middleware de autenticación debe ir antes de las rutas protegidas).

La Figura 4.1 ilustra el recorrido de una petición a través de la cadena de middlewares, incluyendo la rama de validación fallida y el middleware centralizado de errores.

![Canal de middlewares en Express: la petición del cliente pasa en orden por 1 Logger, 2 express.json(), 3 Auth o API-Key y 4 la ruta final, conectados con next(), y la respuesta HTTP regresa al cliente. Si la validación falla, se responde 401 sin llamar a next(). Los errores con next(err) o throw van al middleware de errores, declarado al final con cuatro parámetros.](../assets/figuras/fig-4-1.png)

*Figura 4.1: Canal de middlewares (Middleware Pipeline) en Express*

> **Ejercicio 4.2 — Middleware personalizado**
>
> - Instala Express en un proyecto nuevo y crea un servidor básico con la ruta GET /.
> - Escribe un middleware que mida cuánto tarda cada petición en procesarse (usando process.hrtime o Date.now antes y después de next()).
> - Escribe un middleware de 'API key' simple: si la petición no incluye el header x-api-key con un valor esperado, responde 401 antes de llegar a la ruta.

## 4.3 Enrutamiento: verbos HTTP y parámetros

Express asocia funciones controladoras a combinaciones de método HTTP y ruta. Los cuatro verbos más usados en una API REST son GET (leer), POST (crear), PUT (actualizar) y DELETE (eliminar).

La Figura 4.2 resume la correspondencia entre verbos HTTP, rutas, acción realizada y códigos de estado para el recurso /tareas.

![Tabla del recurso /tareas (id, titulo y completada) con cinco rutas: GET /tareas devuelve 200 OK; GET /tareas/:id devuelve 200 OK o 404 Not Found; POST /tareas devuelve 201 Created o 400 Bad Request; PUT /tareas/:id devuelve 200 OK o 404 Not Found; DELETE /tareas/:id devuelve 204 No Content.](../assets/figuras/fig-4-2.png)

*Figura 4.2: Mapeo de una API RESTful: verbos HTTP, rutas y códigos de estado (recurso /tareas)*

```js
let productos = [
  { id: 1, nombre: 'Teclado mecánico', precio: 899 },
  { id: 2, nombre: 'Mouse inalámbrico', precio: 349 },
];

// GET: listar todos los productos
app.get('/productos', (req, res) => {
  res.json(productos);
});

// GET con parámetro de ruta: obtener un producto por id
app.get('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
  res.json(producto);
});

// POST: crear un producto (requiere express.json() habilitado)
app.post('/productos', (req, res) => {
  const nuevoProducto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: req.body.precio,
  };
  productos.push(nuevoProducto);
  res.status(201).json(nuevoProducto);
});

// PUT: actualizar un producto existente
app.put('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const producto = productos.find((p) => p.id === id);
  if (!producto) return res.status(404).json({ error: 'No encontrado' });

  producto.nombre = req.body.nombre ?? producto.nombre;
  producto.precio = req.body.precio ?? producto.precio;
  res.json(producto);
});

// DELETE: eliminar un producto
app.delete('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  productos = productos.filter((p) => p.id !== id);
  res.status(204).send();
});
```

Además de req.params (parámetros de ruta), es común usar req.query para parámetros de consulta en la URL:

```js
// GET /productos/buscar?texto=teclado&orden=precio
app.get('/productos/buscar', (req, res) => {
  const { texto = '', orden } = req.query;
  let resultado = productos.filter((p) =>
    p.nombre.toLowerCase().includes(texto.toLowerCase())
  );
  if (orden === 'precio') {
    resultado = resultado.sort((a, b) => a.precio - b.precio);
  }
  res.json(resultado);
});
```

> **Ejercicio 4.3 — API REST de tareas (To-Do)**
>
> - Construye una API REST completa para un recurso 'tareas' con los campos id, titulo y completada.
> - Implementa las rutas GET /tareas, GET /tareas/:id, POST /tareas, PUT /tareas/:id y DELETE /tareas/:id.
> - Agrega validación básica: si el POST no incluye 'titulo', responde 400 con un mensaje de error claro.
> - Prueba todas las rutas con Postman o Thunder Client, documentando cada petición con su método, URL, cuerpo y respuesta esperada.

## 4.4 Motores de plantillas vs. APIs

Express puede usarse de dos formas principales: para renderizar HTML en el servidor mediante un motor de plantillas (como EJS), generando páginas completas listas para el navegador; o para exponer una API REST que solo devuelve datos (normalmente JSON), dejando la interfaz al cliente (una SPA en React, una app móvil, etc.).

```bash
npm install ejs
```

```js
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/reporte', (req, res) => {
  res.render('reporte', { productos }); // busca views/reporte.ejs
});
```

```html
<!-- views/reporte.ejs -->
<!DOCTYPE html>
<html lang="es">
<head><title>Reporte de productos</title></head>
<body>
  <h1>Productos disponibles</h1>
  <ul>
    <% productos.forEach(function(p) { %>
      <li><%= p.nombre %> — $<%= p.precio %></li>
    <% }); %>
  </ul>
</body>
</html>
```

### ¿Cuándo elegir cada enfoque?

- Motor de plantillas (EJS, Pug, Handlebars): sitios con contenido mayormente estático o SEO relevante, paneles administrativos simples, prototipos rápidos.
- API REST + frontend independiente: aplicaciones interactivas (SPA), apps móviles que consumen la misma API, equipos separados de frontend y backend, mayor escalabilidad y reutilización del backend.

> **Ejercicio integrador — Sesión 4**
>
> - Sobre la API de tareas del ejercicio 4.3, agrega una ruta GET /tareas/vista que renderice una página EJS mostrando la lista de tareas en una tabla HTML.
> - Marca visualmente (con una clase CSS distinta) las tareas completadas.
> - Como reto: agrega manejo centralizado de errores con un middleware de 4 argumentos (err, req, res, next) al final de la cadena.
