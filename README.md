# NODE.JS BÁSICO

**REDEC · UNAM FES Cuautitlán**

Educación Continua FESC

**MANUAL DEL CURSO**

*Desarrollo del lado del servidor con JavaScript*

Modalidad presencial · 20 horas · 5 sesiones de 4 horas

Del 19 al 23 de octubre de 2026 · 09:00 a 13:00 hrs.

Sede: Xochimilco, 16070, CDMX

> **Nota de divulgación:** Este material fue elaborado con asistencia de Claude (Anthropic) y revisado por Jesús Armando Tapia Gallegos.

Este repositorio contiene la versión en Markdown del manual del curso «Node.js Básico», fiel a la versión 3 del manual en Word, junto con el código de ejemplo de cada sesión y la hoja del alumno de la evaluación diagnóstica y final. El contenido del manual no se reescribió: se convirtió. Cualquier observación técnica o inconsistencia detectada se registra en [docs/NOTAS_DE_REVISION.md](docs/NOTAS_DE_REVISION.md) y el texto original se conserva.

## Cronograma

| Sesión | Fecha | Horario | Tema del cronograma |
| --- | --- | --- | --- |
| [Sesión 1](docs/sesion-1-introduccion-y-entorno.md) | Lunes 19 de octubre de 2026 | 09:00 a 13:00 hrs. (4 horas) | Tema 1: Introducción y Entorno de Node.js |
| [Sesión 2](docs/sesion-2-npm-y-modulos-core.md) | Martes 20 de octubre de 2026 | 09:00 a 13:00 hrs. (4 horas) | Tema 2: El Ecosistema NPM y Módulos Core |
| [Sesión 3](docs/sesion-3-asincronia-y-event-loop.md) | Miércoles 21 de octubre de 2026 | 09:00 a 13:00 hrs. (4 horas) | Tema 3: Asincronía y Event Loop |
| [Sesión 4](docs/sesion-4-servidores-con-express.md) | Jueves 22 de octubre de 2026 | 09:00 a 13:00 hrs. (4 horas) | Tema 4: Creación de Servidores Web con Express |
| [Sesión 5](docs/sesion-5-persistencia-y-despliegue.md) | Viernes 23 de octubre de 2026 | 09:00 a 13:00 hrs. (4 horas) | Tema 5: Persistencia de Datos y Despliegue |

## Índice

- [1. Presentación del curso](docs/00-presentacion.md#1-presentación-del-curso)
- [2. Objetivo general y objetivos por sesión](docs/00-presentacion.md#2-objetivo-general-y-objetivos-por-sesión)
- [3. Metodología y evaluación](docs/00-presentacion.md#3-metodología-y-evaluación)
- [4. Requisitos previos](docs/00-presentacion.md#4-requisitos-previos)
- [5. Sesión 1 — Introducción y Entorno de Node.js](docs/sesion-1-introduccion-y-entorno.md)
- [6. Sesión 2 — El Ecosistema NPM y Módulos Core](docs/sesion-2-npm-y-modulos-core.md)
- [7. Sesión 3 — Asincronía y Event Loop](docs/sesion-3-asincronia-y-event-loop.md)
- [8. Sesión 4 — Creación de Servidores Web con Express](docs/sesion-4-servidores-con-express.md)
- [9. Sesión 5 — Persistencia de Datos y Despliegue](docs/sesion-5-persistencia-y-despliegue.md)
- [10. Proyecto integrador final](docs/10-proyecto-integrador.md)
- [11. Anexos: recursos y referencias](docs/11-anexos-recursos-y-referencias.md)
- [12. Videos de apoyo por sesión (fichas curadas)](docs/12-videos-de-apoyo.md)

## Índice de figuras

- [Figura 1.1: Arquitectura interna de Node.js frente al navegador](docs/sesion-1-introduccion-y-entorno.md#11-qué-es-nodejs)
- [Figura 1.2: Gestión de versiones de Node.js con NVM](docs/sesion-1-introduccion-y-entorno.md#12-instalación-y-versiones-nvm)
- [Figura 2.1: Anatomía de un proyecto Node.js: package.json, package-lock.json y node_modules](docs/sesion-2-npm-y-modulos-core.md#21-npm-packagejson-dependencias-y-scripts)
- [Figura 2.2: Comparativa de sistemas de módulos: CommonJS vs. ES Modules](docs/sesion-2-npm-y-modulos-core.md#22-commonjs-vs-es-modules)
- [Figura 2.3: Módulos core esenciales: Path, FS y OS](docs/sesion-2-npm-y-modulos-core.md#23-módulos-core-esenciales-path-fs-y-os)
- [Figura 3.1: Ciclo y fases del Event Loop en Node.js](docs/sesion-3-asincronia-y-event-loop.md#31-entendiendo-el-event-loop)
- [Figura 3.2: Flujo de datos con Streams y Pipes frente a la carga completa en memoria](docs/sesion-3-asincronia-y-event-loop.md#34-streams-y-buffers-introducción)
- [Figura 4.1: Canal de middlewares (Middleware Pipeline) en Express](docs/sesion-4-servidores-con-express.md#42-introducción-a-expressjs)
- [Figura 4.2: Mapeo de una API RESTful: verbos HTTP, rutas y códigos de estado (recurso /tareas)](docs/sesion-4-servidores-con-express.md#43-enrutamiento-verbos-http-y-parámetros)
- [Figura 5.1: Flujo de persistencia: Express, Mongoose (ODM) y MongoDB](docs/sesion-5-persistencia-y-despliegue.md#51-conexión-a-bases-de-datos-mongodb-mongoose-o-sqlite)
- [Figura 5.2: Flujo de despliegue continuo (CI/CD) a la nube](docs/sesion-5-persistencia-y-despliegue.md#54-introducción-al-despliegue)

## Estructura del repositorio

```text
nodejs-basico-redec-fesc/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── .nvmrc  .editorconfig  .gitignore  package.json
├── docs/
│   ├── 00-presentacion.md
│   ├── sesion-1-introduccion-y-entorno.md
│   ├── sesion-2-npm-y-modulos-core.md
│   ├── sesion-3-asincronia-y-event-loop.md
│   ├── sesion-4-servidores-con-express.md
│   ├── sesion-5-persistencia-y-despliegue.md
│   ├── 10-proyecto-integrador.md
│   ├── 11-anexos-recursos-y-referencias.md
│   ├── 12-videos-de-apoyo.md
│   └── NOTAS_DE_REVISION.md
├── assets/figuras/          # fig-1-1.png ... fig-5-2.png
├── ejemplos/sesion-N/       # código de los ejemplos del manual
├── evaluacion/              # hoja del alumno (sin clave de respuestas)
├── scripts/                 # verificar_fidelidad.py
└── .github/workflows/       # lint de Markdown, enlaces y sintaxis de ejemplos
```

## Cómo usar este repositorio

1. Lee los documentos de `docs/` en el orden del índice. Cada sesión conserva el orden del manual: ficha de la sesión, distribución horaria, secciones con teoría, código y ejercicios, y el ejercicio integrador.
2. Para ejecutar los ejemplos usa la versión de Node.js indicada en `.nvmrc` (con NVM: `nvm install` y `nvm use`). Por ejemplo: `node ejemplos/sesion-1/hola.js`. Los ejemplos que usan paquetes de terceros (Express) requieren instalarlos antes con `npm install`; el repositorio no incluye dependencias.
3. El manual mezcla CommonJS y ES Modules a propósito (Sesión 2): los archivos `.mjs` son ES Modules y los `.js` de `ejemplos/` son CommonJS.
4. Para comprobar que el Markdown es fiel al manual en Word, coloca los `.docx` fuente en una carpeta `fuentes/` (no se publica) y ejecuta `python3 scripts/verificar_fidelidad.py` (requiere `pip install python-docx`).

## Licencia

El texto del manual y las figuras se distribuyen bajo Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0); el código de ejemplo y los scripts, bajo licencia MIT. Consulta [LICENSE](LICENSE). Las ilustraciones muestran la identidad de REDEC-UNAM / Educación Continua FESC: antes de reutilizarlas fuera del curso conviene confirmar los permisos de uso con la institución.

## Contribuciones y revisión

Consulta [CONTRIBUTING.md](CONTRIBUTING.md). Los pendientes y las observaciones técnicas del manual están en [docs/NOTAS_DE_REVISION.md](docs/NOTAS_DE_REVISION.md).
