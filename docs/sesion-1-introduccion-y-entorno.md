# 5. Sesión 1 — Introducción y Entorno de Node.js

| **Fecha** | Lunes 19 de octubre de 2026 |
| --- | --- |
| **Horario** | 09:00 a 13:00 hrs. (4 horas) |
| **Tema del cronograma** | Tema 1: Introducción y Entorno de Node.js |

## Distribución de la sesión

| **Horario** | **Actividad** | **Descripción** |
| --- | --- | --- |
| **09:00–09:20** | Bienvenida | Presentación del curso, encuadre, evaluación diagnóstica. |
| **09:20–10:00** | Teoría 1.1 | ¿Qué es Node.js? Arquitectura basada en V8, naturaleza asíncrona y orientada a eventos. |
| **10:00–10:40** | Teoría/práctica 1.2 | Instalación y versiones de Node.js. Uso de NVM y configuración del entorno. |
| **10:40–10:55** | Receso | Pausa activa. |
| **10:55–11:40** | Práctica 1.3 | El REPL y ejecución de archivos. Primeros pasos en la terminal. |
| **11:40–12:30** | Teoría/práctica 1.4 | Global Objects: diferencias entre window (navegador) y global (Node.js). |
| **12:30–13:00** | Cierre | Ejercicio integrador de la sesión y resolución de dudas. |

## 1.1 ¿Qué es Node.js?

Node.js es un entorno de ejecución de JavaScript del lado del servidor, construido sobre el motor V8 de Google Chrome (el mismo que interpreta JavaScript dentro del navegador). A diferencia de un navegador, Node.js no expone el DOM ni objetos como window; en su lugar, añade APIs propias para interactuar con el sistema de archivos, la red y el sistema operativo.

Su característica distintiva es el modelo de I/O no bloqueante y orientado a eventos: en lugar de crear un hilo por cada conexión (como hacían muchos servidores tradicionales), Node.js utiliza un único hilo principal que delega las operaciones de entrada/salida (lectura de archivos, consultas a bases de datos, peticiones de red) a la libreria libuv, y continúa ejecutando otro código mientras espera la respuesta. Cuando la operación termina, se encola un callback que el hilo principal ejecuta en su momento.

Esto permite que Node.js maneje miles de conexiones concurrentes con un consumo de memoria relativamente bajo, siendo especialmente eficiente para aplicaciones con muchas operaciones de I/O (APIs, chats en tiempo real, streaming), aunque no es la mejor opción para tareas intensivas en cómputo (CPU-bound) que bloquean el hilo único.

La Figura 1.1 compara ambos entornos: el motor V8 es el mismo, pero en el navegador se conecta con las Web APIs (DOM, window, localStorage, fetch), mientras que en Node.js se conecta, mediante bindings de C/C++, con libuv y con las APIs nativas del sistema (fs, path, http, os).

![Diagrama comparativo en dos columnas. A la izquierda, el navegador: el motor V8 se conecta con las Web APIs (DOM, window, localStorage y fetch) y de ahí con la interfaz de usuario. A la derecha, Node.js: el mismo motor V8 se conecta mediante bindings de C/C++ con libuv (Event Loop y Thread Pool) y con las APIs nativas (fs, path, http, os, process y global), que acceden a archivos, red y sistema operativo.](../assets/figuras/fig-1-1.png)

*Figura 1.1: Arquitectura interna de Node.js frente al navegador*

### Puntos clave

- Node.js = motor V8 + APIs de sistema (libuv) + módulo loader.
- Un solo hilo principal, modelo de eventos no bloqueante.
- Ideal para I/O intensivo; no ideal para cómputo intensivo sin ayuda (worker_threads, clusters).
- JavaScript en el servidor permite compartir código y conocimiento con el frontend.

## 1.2 Instalación y versiones: NVM

Node.js se publica en líneas de versiones, y las versiones LTS (Long Term Support) son las recomendadas para producción. Hasta Node.js 26 solo las versiones pares pasaban a LTS y las impares eran de corta duración; según el anuncio del proyecto, a partir de Node.js 27 habrá una versión mayor por año y todas serán LTS. Consulta siempre el calendario vigente en nodejs.org. Administrar manualmente la versión instalada es incómodo cuando se trabaja en varios proyectos; para eso existe NVM (Node Version Manager), que permite instalar y alternar entre múltiples versiones de Node.js en la misma máquina.

```bash
# Instalar NVM (Linux/macOS)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Instalar la última versión LTS
nvm install --lts

# Listar versiones instaladas
nvm ls

# Usar una versión específica
nvm use 24   # requiere: nvm install 24

# Verificar la versión activa
node -v
npm -v
```

En Windows se recomienda nvm-windows, una herramienta equivalente con instalador gráfico.

La Figura 1.2 muestra cómo NVM mantiene varias versiones de Node.js instaladas en el equipo y activa solo una de ellas mediante el comando nvm use.

![Diagrama de NVM. A la izquierda, los comandos nvm install --lts, nvm ls, nvm use con la versión deseada y node -v. En el centro, NVM. A la derecha, tres carpetas de versiones en ~/.nvm/versions/node/: la v22.x inactiva, la v24.x (LTS) activa tras nvm use y la v26.x inactiva.](../assets/figuras/fig-1-2.png)

*Figura 1.2: Gestión de versiones de Node.js con NVM*

> **Ejercicio 1.2 — Preparar el entorno**
>
> - Instala NVM en tu equipo (o nvm-windows si usas Windows).
> - Instala la versión LTS más reciente de Node.js.
> - Ejecuta node -v y npm -v y toma captura de los resultados.
> - Instala una segunda versión de Node.js (por ejemplo, la 22 o la 24) y practica alternar entre ambas con nvm use.

## 1.3 El REPL y ejecución de archivos

El REPL (Read-Eval-Print Loop) es una consola interactiva que se abre al ejecutar node sin argumentos. Permite escribir y evaluar expresiones de JavaScript línea por línea, ideal para probar ideas rápidas.

```text
$ node
> const saludo = 'Hola Node.js';
undefined
> saludo.toUpperCase();
'HOLA NODE.JS'
> .exit
```

Para ejecutar un programa completo, se guarda el código en un archivo con extensión .js y se invoca con node:

```js
// archivo: hola.js
console.log('Hola desde un archivo de Node.js');

const ahora = new Date();
console.log('Fecha y hora actual:', ahora.toLocaleString());
```

```text
$ node hola.js
Hola desde un archivo de Node.js
Fecha y hora actual: ...
```

> **Ejercicio 1.3 — Primeros pasos en la terminal**
>
> - Abre el REPL y calcula el resultado de tres operaciones aritméticas distintas.
> - Declara un arreglo de 5 nombres y utiliza .map() para convertirlos a mayúsculas dentro del REPL.
> - Crea un archivo saludo.js que reciba un nombre mediante process.argv y despliegue un saludo personalizado.
> - Ejecuta el archivo desde la terminal pasando tu nombre como argumento: node saludo.js TuNombre.

## 1.4 Global Objects: window vs. global

En el navegador, el objeto global implícito es window, que expone el DOM, localStorage, fetch, etc. En Node.js no existe el DOM; el objeto global equivalente se llama global (y, desde versiones recientes, también existe globalThis como estándar unificado entre entornos).

```js
console.log(typeof window);   // 'undefined' en Node.js
console.log(typeof global);   // 'object'
console.log(typeof globalThis); // 'object' (estándar, funciona en navegador y Node)

// Variables 'globales' propias de cada módulo en Node.js:
console.log(__dirname); // ruta absoluta del directorio del archivo actual
console.log(__filename); // ruta absoluta del archivo actual
console.log(process.version); // versión de Node.js en ejecución
```

Es importante notar que \_\_dirname y \_\_filename son variables de módulo, no globales reales del objeto global; están disponibles automáticamente dentro de cada archivo CommonJS gracias al sistema de módulos, tema que se profundiza en la Sesión 2.

> **Ejercicio integrador — Sesión 1**
>
> - Crea un script info-entorno.js que imprima: la versión de Node.js, la plataforma del sistema operativo (process.platform), el directorio actual (\_\_dirname) y el tiempo que el proceso lleva corriendo (process.uptime()).
> - Agrega un temporizador con setInterval que imprima un mensaje cada 2 segundos, y detén la ejecución después de tres mensajes usando clearInterval.
> - Reflexiona por escrito (3-4 líneas): ¿en qué se diferencia la ejecución de este script de ejecutar el mismo código dentro de un navegador?
