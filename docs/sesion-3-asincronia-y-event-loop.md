# 7. Sesión 3 — Asincronía y Event Loop

| **Fecha** | Miércoles 21 de octubre de 2026 |
| --- | --- |
| **Horario** | 09:00 a 13:00 hrs. (4 horas) |
| **Tema del cronograma** | Tema 3: Asincronía y Event Loop |

## Distribución de la sesión

| **Horario** | **Actividad** | **Descripción** |
| --- | --- | --- |
| **09:00–09:15** | Repaso | Repaso rápido de la Sesión 2 y resolución de dudas. |
| **09:15–10:00** | Teoría 3.1 | Entendiendo el Event Loop: cómo Node gestiona las operaciones de I/O sin bloquear el hilo principal. |
| **10:00–11:00** | Teoría/práctica 3.2 | Callbacks y promesas: refuerzo de patrones asíncronos aplicados a Node.js. |
| **11:00–11:15** | Receso | Pausa activa. |
| **11:15–12:15** | Teoría/práctica 3.3 | EventEmitter: creación y manejo de eventos personalizados. |
| **12:15–13:00** | Teoría/práctica 3.4 | Streams y Buffers (introducción): manejo eficiente de grandes volúmenes de datos. |

## 3.1 Entendiendo el Event Loop

El Event Loop es el mecanismo que permite a Node.js realizar operaciones no bloqueantes a pesar de ejecutar JavaScript en un único hilo. Cuando el programa invoca una operación de I/O (leer un archivo, hacer una petición de red, consultar una base de datos), Node.js delega esa tarea a libuv y continúa ejecutando el resto del código. Al completarse la operación, el callback correspondiente se coloca en una cola y el Event Loop lo ejecuta cuando el call stack está vacío.

De forma simplificada, el Event Loop recorre varias fases en cada iteración, entre ellas:

- timers: ejecuta los callbacks programados con setTimeout y setInterval que ya cumplieron su tiempo.
- pending callbacks: ejecuta callbacks de I/O diferidos.
- poll: recupera nuevos eventos de I/O y ejecuta sus callbacks.
- check: ejecuta los callbacks programados con setImmediate.
- close callbacks: ejecuta callbacks de cierre, como socket.on('close', ...).

Además, existen las microtareas (callbacks de promesas y process.nextTick), que se procesan entre cada fase y tienen mayor prioridad que los timers.

La Figura 3.1 representa las seis fases del Event Loop, la cola de microtareas y la delegación de operaciones de I/O a libuv.

![A la izquierda, el Call Stack (main, función B y función C) que delega la E/S asíncrona a libuv (Thread Pool y kernel del sistema operativo), el cual devuelve el callback listo. A la derecha, el ciclo de seis fases del Event Loop: 1 Timers, 2 Pending callbacks, 3 Idle/Prepare, 4 Poll, 5 Check y 6 Close callbacks, con la cola de microtareas (process.nextTick y Promise.then) de mayor prioridad al centro.](../assets/figuras/fig-3-1.png)

*Figura 3.1: Ciclo y fases del Event Loop en Node.js*

```js
console.log('1. Inicio del script');

setTimeout(() => console.log('4. Timeout (macrotask)'), 0);

Promise.resolve().then(() => console.log('3. Promise (microtask)'));

console.log('2. Fin del script');

// Orden de salida:
// 1. Inicio del script
// 2. Fin del script
// 3. Promise (microtask)
// 4. Timeout (macrotask)
```

> **Ejercicio 3.1 — Predecir el orden de ejecución**
>
> - Sin ejecutar el código, escribe en papel el orden esperado de impresión de un script con 2 setTimeout, 2 promesas y console.log intercalados que el instructor proporcionará.
> - Ejecuta el script y compara tu predicción con el resultado real; explica cualquier diferencia.

## 3.2 Callbacks y promesas

El patrón de callback fue la forma original de manejar asincronía en Node.js, pero puede derivar en anidamientos difíciles de leer conocidos como 'callback hell':

```js
// Callback hell
obtenerUsuario(1, (usuario) => {
  obtenerPedidos(usuario.id, (pedidos) => {
    obtenerDetallePedido(pedidos[0].id, (detalle) => {
      console.log(detalle);
    });
  });
});
```

Las promesas y, sobre ellas, la sintaxis async/await resuelven este problema permitiendo escribir código asíncrono con apariencia secuencial:

```js
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) return reject(new Error('ID inválido'));
      resolve({ id, nombre: 'Armando' });
    }, 500);
  });
}

// Con .then()/.catch()
obtenerUsuario(1)
  .then((usuario) => console.log('Usuario:', usuario))
  .catch((error) => console.error('Error:', error.message));

// Con async/await (más legible)
async function main() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log('Usuario:', usuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
main();
```

Para ejecutar varias promesas en paralelo y esperar a que todas terminen, se utiliza Promise.all:

```js
async function cargarDashboard() {
  const [usuario, pedidos, notificaciones] = await Promise.all([
    obtenerUsuario(1),
    obtenerPedidos(1),
    obtenerNotificaciones(1),
  ]);
  console.log({ usuario, pedidos, notificaciones });
}
```

> **Ejercicio 3.2 — De callbacks a async/await**
>
> - Toma una función que simule una consulta lenta con setTimeout y un callback (error, resultado).
> - Conviértela en una función que retorne una Promise.
> - Escribe una función async que use await para consumirla, con manejo de errores mediante try/catch.
> - Crea tres funciones simuladas independientes (cada una con su propio retardo) y ejecútalas en paralelo con Promise.all, midiendo el tiempo total con console.time/console.timeEnd.

## 3.3 EventEmitter

El módulo events proporciona la clase EventEmitter, base de gran parte de la API de Node.js (streams, servidores HTTP, etc.). Permite emitir eventos personalizados y registrar múltiples escuchas (listeners) para reaccionar a ellos, siguiendo el patrón Observador.

```js
const { EventEmitter } = require('events');

class TiendaEnLinea extends EventEmitter {
  registrarPedido(pedido) {
    console.log('Procesando pedido...');
    // lógica de negocio...
    this.emit('pedidoCreado', pedido);
  }
}

const tienda = new TiendaEnLinea();

tienda.on('pedidoCreado', (pedido) => {
  console.log(`Enviar correo de confirmación para el pedido #${pedido.id}`);
});

tienda.on('pedidoCreado', (pedido) => {
  console.log(`Actualizar inventario tras el pedido #${pedido.id}`);
});

tienda.registrarPedido({ id: 1001, total: 599.0 });
```

> **Ejercicio 3.3 — EventEmitter propio**
>
> - Crea una clase Cronometro que extienda de EventEmitter.
> - Implementa un método iniciar() que emita un evento tick cada segundo (usando setInterval) con el número de segundos transcurridos.
> - Emite un evento finalizado cuando el cronómetro llegue a 10 segundos, y detén el intervalo.
> - Registra al menos dos listeners distintos para el evento tick (por ejemplo, uno que imprima en consola y otro que acumule el total en una variable).

## 3.4 Streams y Buffers (introducción)

Un Buffer es una región de memoria fuera del heap de V8 usada para manejar datos binarios (por ejemplo, el contenido de un archivo antes de convertirlo a texto). Los Streams son una abstracción para trabajar con datos que se leen o escriben de forma fragmentada (por 'trozos' o chunks), en lugar de cargar todo en memoria de una sola vez — fundamental para manejar archivos grandes o datos que llegan por red.

```js
const fs = require('fs');

// Leer un archivo grande como stream, en fragmentos
const lector = fs.createReadStream('archivo-grande.log', { encoding: 'utf-8' });

lector.on('data', (chunk) => {
  console.log('Fragmento recibido, tamaño:', chunk.length);
});

lector.on('end', () => {
  console.log('Lectura completa.');
});

lector.on('error', (error) => {
  console.error('Error al leer:', error.message);
});

// Encadenar lectura y escritura con pipe (patrón muy común)
const escritor = fs.createWriteStream('copia-archivo-grande.log');
fs.createReadStream('archivo-grande.log').pipe(escritor);
```

- Readable: streams de lectura (fs.createReadStream, peticiones HTTP entrantes).
- Writable: streams de escritura (fs.createWriteStream, la respuesta HTTP).
- Duplex: lectura y escritura simultánea (por ejemplo, un socket TCP).
- Transform: un Duplex que además transforma los datos al pasar (por ejemplo, compresión con zlib).

La Figura 3.2 contrasta la carga completa de un archivo en memoria con su procesamiento por fragmentos (chunks) mediante streams y pipe().

![Comparación entre cargar un archivo completo en memoria con fs.readFile o fs.readFileSync, que consume memoria proporcional al tamaño del archivo, y procesarlo con streams: el archivo se divide en chunks que pasan por un Readable Stream, pipe() y un Writable Stream hasta el destino, con consumo de memoria bajo y constante. También define Buffer como región de memoria para datos binarios.](../assets/figuras/fig-3-2.png)

*Figura 3.2: Flujo de datos con Streams y Pipes frente a la carga completa en memoria*

> **Ejercicio integrador — Sesión 3**
>
> - Genera un archivo de texto de varios MB (puedes repetir una línea miles de veces con un script).
> - Cópialo usando fs.createReadStream().pipe(fs.createWriteStream()) y mide el tiempo con console.time.
> - Compáralo con una copia usando fs.readFileSync + fs.writeFileSync; discute en el grupo cuál enfoque es más eficiente en memoria y por qué.
> - Como reto opcional: agrega un EventEmitter que emita un evento de progreso cada vez que se procese un chunk del stream de lectura.
