# 6. Sesión 2 — El Ecosistema NPM y Módulos Core

| **Fecha** | Martes 20 de octubre de 2026 |
| --- | --- |
| **Horario** | 09:00 a 13:00 hrs. (4 horas) |
| **Tema del cronograma** | Tema 2: El Ecosistema NPM y Módulos Core |

## Distribución de la sesión

| **Horario** | **Actividad** | **Descripción** |
| --- | --- | --- |
| **09:00–09:15** | Repaso | Repaso rápido de la Sesión 1 y resolución de dudas. |
| **09:15–10:15** | Teoría/práctica 2.1 | NPM: inicialización de proyectos (package.json), instalación de dependencias y scripts personalizados. |
| **10:15–11:00** | Teoría/práctica 2.2 | Sistema de módulos: CommonJS (require) vs. ES Modules (import/export). |
| **11:00–11:15** | Receso | Pausa activa. |
| **11:15–12:45** | Teoría/práctica 2.3 | Módulos core esenciales: Path, FS (File System) y OS. |
| **12:45–13:00** | Cierre | Ejercicio integrador y resolución de dudas. |

## 2.1 NPM: package.json, dependencias y scripts

NPM (Node Package Manager) es el gestor de paquetes que se instala junto con Node.js. Permite inicializar proyectos, declarar e instalar dependencias de terceros, y definir scripts reutilizables. El archivo package.json es el manifiesto del proyecto: describe su nombre, versión, dependencias y los comandos disponibles.

```bash
# Inicializar un proyecto (modo interactivo)
npm init

# Inicializar con valores por defecto
npm init -y

# Instalar una dependencia de producción
npm install express

# Instalar una dependencia de desarrollo
npm install --save-dev nodemon

# Instalar una dependencia de forma global
npm install -g typescript

# Eliminar una dependencia
npm uninstall express
```

Ejemplo de un package.json típico, con scripts personalizados:

```json
{
  "name": "mi-proyecto-node",
  "version": "1.0.0",
  "description": "Proyecto de práctica del curso Node.js Básico",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "echo \"Error: no hay pruebas configuradas\" && exit 1"
  },
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

Los scripts se ejecutan con npm run \<nombre> (start y test tienen atajos: npm start y npm test). El archivo package-lock.json fija las versiones exactas instaladas para garantizar builds reproducibles, y no debe editarse manualmente.

La Figura 2.1 resume el papel de cada elemento de un proyecto: package.json (manifiesto), package-lock.json (versiones exactas e integridad) y node_modules/ (paquetes descargados).

![Tres columnas que describen un proyecto Node.js: package.json (manifiesto con scripts y dependencias), package-lock.json (versiones exactas y hash de integridad) y node_modules/ (paquetes descargados, con express, body-parser y nodemon como ejemplo). Debajo, el flujo de inicialización e instalación: npm init -y, npm install express y npm install.](../assets/figuras/fig-2-1.png)

*Figura 2.1: Anatomía de un proyecto Node.js: package.json, package-lock.json y node_modules*

> **Ejercicio 2.1 — Inicializar un proyecto**
>
> - Crea una carpeta nueva y ejecuta npm init -y dentro de ella.
> - Instala nodemon como dependencia de desarrollo.
> - Crea un script npm run dev que ejecute un archivo index.js usando nodemon.
> - Agrega un script personalizado llamado saluda que imprima un mensaje con el comando echo.

## 2.2 CommonJS vs. ES Modules

Node.js soporta dos sistemas de módulos. CommonJS (CJS) es el sistema histórico y por defecto: usa require() para importar y module.exports para exportar. Los ES Modules (ESM), el estándar del lenguaje JavaScript, usan las palabras clave import y export.

```js
// ---- CommonJS (archivo matematica.js) ----
function sumar(a, b) {
  return a + b;
}

module.exports = { sumar };

// ---- Uso (archivo app.js) ----
const { sumar } = require('./matematica');
console.log(sumar(2, 3)); // 5
```

```js
// ---- ES Modules (archivo matematica.mjs) ----
export function sumar(a, b) {
  return a + b;
}

// ---- Uso (archivo app.mjs) ----
import { sumar } from './matematica.mjs';
console.log(sumar(2, 3)); // 5
```

Para usar ESM sin la extensión .mjs, se agrega "type": "module" en package.json. Es importante no mezclar ambos sistemas dentro del mismo archivo; un proyecto suele decidir uno u otro de forma consistente.

### Diferencias principales

- CommonJS carga los módulos de forma síncrona; ESM los carga de forma asíncrona.
- CommonJS: require() puede llamarse condicionalmente en cualquier parte del código; los import de ESM se resuelven de forma estática al inicio del archivo.
- ESM es el estándar también usado en navegadores, lo que facilita compartir código entre frontend y backend.

La Figura 2.2 presenta una comparativa visual de ambos sistemas de módulos.

![Comparativa de CommonJS (CJS) y ES Modules (ESM) con ejemplos de código y cinco filas: carga síncrona frente a asíncrona; sintaxis require() y module.exports frente a import y export; resolución dinámica frente a estática; extensión .js o .cjs frente a .mjs o "type": "module"; top-level await no disponible frente a disponible. Un recuadro final indica no mezclar ambas sintaxis en un mismo archivo.](../assets/figuras/fig-2-2.png)

*Figura 2.2: Comparativa de sistemas de módulos: CommonJS vs. ES Modules*

> **Ejercicio 2.2 — Migrar de CommonJS a ESM**
>
> - Crea un módulo utilidades.js en CommonJS con dos funciones (por ejemplo, capitalizar y esPar).
> - Impórtalo y utilízalo desde otro archivo con require().
> - Duplica el ejercicio usando ES Modules: agrega "type": "module" al package.json y reescribe ambos archivos con export/import.
> - Documenta en un comentario qué tuviste que cambiar para migrar de un sistema a otro.

## 2.3 Módulos core esenciales: Path, FS y OS

Node.js incluye módulos nativos ("core modules") que no requieren instalación. Tres de los más utilizados son path, fs y os.

La Figura 2.3 ofrece una vista general de los tres módulos que se revisan a continuación.

![Tres columnas con los módulos core path, fs y os. path: basename, dirname, extname, join y resolve para manejar rutas. fs: lectura y escritura asíncrona (recomendada) frente a la versión síncrona (uso limitado). os: platform, arch, cpus, totalmem, freemem y userInfo para consultar el sistema operativo.](../assets/figuras/fig-2-3.png)

*Figura 2.3: Módulos core esenciales: Path, FS y OS*

### Path — gestión de rutas de archivos

```js
const path = require('path');

const ruta = '/usuarios/armando/proyectos/app.js';

console.log(path.basename(ruta));   // 'app.js'
console.log(path.dirname(ruta));    // '/usuarios/armando/proyectos'
console.log(path.extname(ruta));    // '.js'
console.log(path.join(__dirname, 'datos', 'archivo.txt'));
console.log(path.resolve('datos', 'archivo.txt'));
```

### FS — lectura, escritura y manipulación de archivos

```js
const fs = require('fs');

// Escritura síncrona (bloquea el hilo hasta terminar)
fs.writeFileSync('nota.txt', 'Hola desde Node.js');

// Lectura síncrona
const contenido = fs.readFileSync('nota.txt', 'utf-8');
console.log(contenido);

// Versión asíncrona con callback (no bloquea el hilo principal)
fs.readFile('nota.txt', 'utf-8', (error, datos) => {
  if (error) {
    console.error('Error al leer el archivo:', error.message);
    return;
  }
  console.log('Contenido asíncrono:', datos);
});

console.log('Esta línea se imprime antes que el contenido asíncrono');

// Versión moderna basada en promesas
const fsPromises = require('fs/promises');

async function leerArchivo() {
  const datos = await fsPromises.readFile('nota.txt', 'utf-8');
  console.log('Con promesas:', datos);
}
leerArchivo();
```

Se recomienda usar siempre las versiones asíncronas (callback o promesas) en aplicaciones de producción, reservando las versiones síncronas (Sync) para scripts de arranque o herramientas de línea de comandos donde bloquear el hilo no es un problema.

### OS — información del sistema operativo

```js
const os = require('os');

console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Memoria libre (bytes):', os.freemem());
console.log('Memoria total (bytes):', os.totalmem());
console.log('Núcleos de CPU:', os.cpus().length);
console.log('Usuario actual:', os.userInfo().username);
```

> **Ejercicio integrador — Sesión 2**
>
> - Construye un script inventario.js que use fs para crear un archivo inventario.json con un arreglo de al menos 5 productos (nombre, precio, cantidad).
> - Usa fs/promises para leer ese archivo y calcular el valor total del inventario (suma de precio \* cantidad).
> - Usa el módulo path para construir la ruta del archivo de forma independiente del sistema operativo (sin escribir '/' o '\\\\' a mano).
> - Agrega al final un reporte impreso en consola con os.platform() y la fecha de ejecución.
