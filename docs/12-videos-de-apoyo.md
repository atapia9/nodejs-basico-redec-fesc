# 12. Videos de apoyo por sesión (fichas curadas)

**Cómo usar estas fichas:** antes de ver cada video, intenta predecir qué va a pasar; después, piensa en el caso de uso y responde la pregunta. No buscamos solo código que funcione, sino código que podamos explicar.

**Lista de reproducción:** todos los videos de estas fichas están reunidos en una lista de YouTube (no listada; solo se accede con el enlace): [Node.js Básico - REDEC FESC (Videos de apoyo)](https://youtube.com/playlist?list=PLUMolTkur2Cc&si=RUIZHDWXTIkthQn9)

**Nota de curaduría:** los videos se localizaron mediante búsqueda en YouTube y se listan con el título publicado. El canal se indica solo donde YouTube lo mostró al agregarlos a una lista de reproducción; no se verificó la duración. Varios videos tienen años de antigüedad y alguno puede retirarse, por lo que el instructor debe revisarlos antes del curso. Los videos en inglés se marcan como opcionales.

## Sesión 1: Introducción y Entorno de Node.js

19 de octubre de 2026 · 09:00 a 13:00 hrs.

### 1.1 · ¿Qué es Node.js?

**Idea clave:** Node.js es JavaScript fuera del navegador: el motor V8 más libuv, con un solo hilo y E/S no bloqueante orientada a eventos.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [QUÉ es Node JS? CÓMO funciona? Curso de Node.JS desde cero #1](https://www.youtube.com/watch?v=e8n_9N-ZyFE) |
| **Refuerzo** | [¿Qué es Node.js y cuáles son sus ventajas y desventajas?](https://www.youtube.com/watch?v=EupEtuUf1DQ)  (canal: DesarrolladorSoft) |
| **Opcional** | [¿Qué es Node.js? Breve explicación animada](https://www.youtube.com/watch?v=xJzzu7MVZXw)  (canal: Bitech Studio) |

**Caso de uso real:** Un servidor que atiende a muchos usuarios a la vez (un chat, una API) sin crear un hilo por cada conexión.

**Pregunta para pensar:** ¿Por qué Node.js no es la mejor opción para una tarea que calcula durante minutos sin pausas de E/S?

### 1.2 · Instalación y versiones: NVM

**Idea clave:** Cada proyecto puede requerir otra versión de Node.js; NVM permite instalar varias y alternar entre ellas.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Múltiples versiones de Node.js con NVM](https://www.youtube.com/watch?v=iG4u1MK7N3I)  (canal: jonmircha) |
| **Refuerzo** | [INSTALAR CUALQUIER VERSIÓN DE NODE.JS CON NVM](https://www.youtube.com/watch?v=MhrPeOoEJBA)  (canal: OpenWebinars) |
| **Opcional** | [Node Js y NVM - Cambiar entre versiones](https://www.youtube.com/watch?v=KQxlWE0zWRs) |

*Ojo: Varios de estos videos tienen años; las versiones de Node.js que muestran ya no son las vigentes. Fíjate en el procedimiento, no en los números de versión.*

**Caso de uso real:** Mantener un proyecto antiguo en su versión y empezar uno nuevo en la LTS vigente, sin reinstalar nada.

**Pregunta para pensar:** ¿Qué comando muestra las versiones instaladas y cuál cambia la versión activa?

### 1.3 · El REPL y ejecución de archivos

**Idea clave:** El REPL sirve para probar ideas línea por línea; los programas completos se guardan en un archivo .js y se ejecutan con node archivo.js.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Primer Proyecto y Ejecución con Node.js a través de la Consola](https://www.youtube.com/watch?v=wuNX7OQVr0c) |
| **Refuerzo** | [REPL (Read, Eval, Print, Loop)](https://www.youtube.com/watch?v=k4zKpCzdo0Y) |
| **Opcional** | [JavaScript - Ejercicio 450: Ejecutar Código Node (JavaScript) desde la Terminal Interactiva (REPL)](https://www.youtube.com/watch?v=9Bh6-E0Kges) |

**Caso de uso real:** Probar una expresión en el REPL antes de pasarla a tu script.

**Pregunta para pensar:** ¿Cuándo prefieres el REPL y cuándo un archivo?

### 1.4 · Global Objects: window vs. global

**Idea clave:** En Node.js no existe el DOM ni window: el objeto global es global (globalThis funciona en ambos entornos); \_\_dirname y \_\_filename son variables de cada módulo.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [GLOBAL vs WINDOW - Objetos globales en Node JS - Curso de Node.JS desde cero #2](https://www.youtube.com/watch?v=_2VHVIJCtGk) |

**Caso de uso real:** Un script que imprime la versión de Node.js, la plataforma y la carpeta actual (ejercicio integrador de la sesión).

**Pregunta para pensar:** ¿Por qué typeof window devuelve 'undefined' en Node.js y qué usarías en su lugar?

**Cierre:** Tiempo (Event Loop) y espacio (scope) ya existen en el navegador; Node.js los lleva al servidor y suma las APIs del sistema.

Actividad 1: entrega los scripts de los ejercicios 1.2, 1.3 y el integrador de la sesión 1 (info-entorno.js), con comentarios que expliquen qué hace cada bloque y qué concepto demuestra. Entrégalo antes de la Sesión 2.

## Sesión 2: El Ecosistema NPM y Módulos Core

20 de octubre de 2026 · 09:00 a 13:00 hrs.

### 2.1 · NPM: package.json, dependencias y scripts

**Idea clave:** package.json es el manifiesto del proyecto; dependencies y devDependencies separan lo que necesita producción de lo que solo necesita desarrollo; scripts define comandos reutilizables.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [PACKAGE.JSON - DEPENDENCIES vs DEVDEPENDENCIES - ¿Cómo afectan al NODE_MODULES?](https://www.youtube.com/watch?v=7HTfEG_sj9s)  (canal: Desarrollo Útil) |
| **Refuerzo** | [El package.json en node - Qué es npm init - Qué es npm init -y](https://www.youtube.com/watch?v=p6oODCpTTBA) |
| **Opcional** | [NPM (Node Package Manager): Instalación de Dependencias en Proyecto de Node](https://www.youtube.com/watch?v=Qlv0HGwnNTA) |

**Caso de uso real:** Un compañero clona el repositorio y, con npm install, obtiene el mismo entorno que tú.

**Pregunta para pensar:** ¿Por qué nodemon va en devDependencies y express en dependencies?

### 2.2 · CommonJS vs. ES Modules

**Idea clave:** CommonJS usa require y module.exports; ES Modules usa import y export y se activa con .mjs o con "type": "module" en package.json. No mezcles ambas sintaxis en un mismo archivo.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [REQUIRE vs IMPORT - COMMON JS vs ES MODULES - CJS vs ESM - Curso de Node.JS desde cero #3](https://www.youtube.com/watch?v=29iYdru2KUg) |
| **Refuerzo** | [Módulos en Javascript. ¿Qué es CommonJS y AMD?](https://www.youtube.com/watch?v=JP6TY4R6Y3U)  (canal: Programación y más) |
| **Opcional (inglés)** | [Modules in Node: CommonJS and ESM](https://www.youtube.com/watch?v=4N00XnEcNWE) |

*Ojo: El video de refuerzo es de contexto histórico (CommonJS y AMD) y no cubre el soporte actual de ES Modules en Node.js.*

**Caso de uso real:** Migrar un módulo de utilidades a ESM para compartir código con el frontend.

**Pregunta para pensar:** ¿Qué error aparece si usas import en un archivo CommonJS y cómo lo corriges?

### 2.3 · Módulos core: Path, FS y OS

**Idea clave:** Los módulos core vienen con Node.js; fs conviene usarlo en su versión asíncrona y path evita escribir separadores de ruta a mano.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [11. escribir archivos con NodeJS](https://www.youtube.com/watch?v=aA7h_M85rjA)  (síncrono y asíncrono) |
| **Refuerzo** | [Javascript: Leer un fichero con readFileSync](https://www.youtube.com/watch?v=fgnCM1S-xpk)  (canal: Pau Fernández) |

**Caso de uso real:** Un script de inventario que lee y escribe JSON con rutas que funcionan igual en cualquier sistema operativo.

**Pregunta para pensar:** ¿Por qué usar path.join en lugar de concatenar cadenas con "/"?

**Cierre:** package.json describe el proyecto, los módulos organizan el código y fs, path y os conectan el programa con el sistema.

Actividad 2: entrega inventario.js (ejercicio integrador de la sesión 2) y el ejercicio 2.2 en ambos sistemas de módulos, con comentarios sobre qué cambió al migrar. Entrégalo antes de la Sesión 3.

## Sesión 3: Asincronía y Event Loop

21 de octubre de 2026 · 09:00 a 13:00 hrs.

### 3.1 · Entendiendo el Event Loop

**Idea clave:** JavaScript ejecuta una cosa a la vez; lo lento se delega y su callback espera en una cola hasta que el Call Stack queda libre. Las microtareas (promesas) se atienden antes que los timers.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Entiende el Event Loop de JavaScript en 10 minutos](https://www.youtube.com/watch?v=XdzDDRF8_mY)  (canal: Latte And Code) |
| **Refuerzo** | [QUÉ es el EVENT LOOP en JAVASCRIPT - PASO a PASO](https://www.youtube.com/watch?v=rvzItyLuh28)  (canal: Eduardo Fierro) |
| **Opcional** | [OBSERVA cómo FUNCIONA el EVENT LOOP en JAVASCRIPT](https://www.youtube.com/watch?v=s1PmAdnVMEQ)  (canal: Eduardo Fierro) |

*Ojo: Estos videos explican el Event Loop de JavaScript en general (con ejemplos del navegador). Las fases propias de Node.js (timers, poll, check…) se revisan con la Figura 3.1 del manual.*

**Caso de uso real:** Un servidor sigue respondiendo peticiones mientras lee un archivo grande.

**Pregunta para pensar:** ¿Por qué una promesa ya resuelta se ejecuta antes que setTimeout(fn, 0)?

### 3.2 · Callbacks y promesas

**Idea clave:** Los callbacks anidados derivan en 'callback hell'; las promesas y async/await permiten escribir asincronía con apariencia secuencial, y Promise.all ejecuta tareas en paralelo.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Callbacks, Promises (promesas) y async await en JavaScript](https://www.youtube.com/watch?v=HgqNstf4xg0) |
| **Refuerzo** | [Async y Await en JavaScript: Cómo Funcionan las Promesas](https://www.youtube.com/watch?v=mwpTkPkWPcE) |

**Caso de uso real:** Un dashboard que carga usuario, pedidos y notificaciones al mismo tiempo.

**Pregunta para pensar:** ¿Cuándo usarías Promise.all y cuándo varios await en secuencia?

### 3.3 · EventEmitter

**Idea clave:** EventEmitter permite emitir eventos con nombre (emit) y reaccionar a ellos con uno o varios listeners (on): el patrón observador.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Te MUESTRO un EJEMPLO de Event Emitter de Node JS PASO a PASO](https://www.youtube.com/watch?v=qvWK76GyyxQ) |
| **Opcional (inglés)** | [Node.js "Event Emitters" Explained](https://m.youtube.com/live/wINRm5arVlM) |

**Caso de uso real:** En una tienda en línea, al crear un pedido se envía un correo y se actualiza el inventario con listeners independientes.

**Pregunta para pensar:** ¿Qué ocurre si se emite un evento 'error' y no hay ningún listener registrado para él?

### 3.4 · Streams y Buffers (introducción)

**Idea clave:** Un Buffer almacena datos binarios fuera del heap de V8; un Stream procesa los datos por fragmentos, y pipe() conecta un stream de lectura con uno de escritura.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Opcional (inglés)** | [Node JS Tutorial for Beginners #13 - Streams and Buffers](https://www.youtube.com/watch?v=GlybFFMXXmQ) |
| **Opcional (inglés)** | [Node.js Crash Course Tutorial #10 - Streams and Buffers](https://www.youtube.com/watch?v=IOvHObuxGdE) |

**Caso de uso real:** Copiar un archivo de log de varios GB sin saturar la memoria del servidor.

**Pregunta para pensar:** ¿Por qué el consumo de memoria no depende del tamaño del archivo cuando se usan streams?

**Cierre:** El Event Loop decide cuándo corre cada cosa; callbacks, promesas, eventos y streams son las formas de aprovecharlo sin bloquear.

Actividad 3: entrega los ejercicios 3.2, 3.3 y el integrador de streams, con comentarios que expliquen el orden de ejecución y por qué no bloquean el hilo principal. Entrégalo antes de la Sesión 4.

## Sesión 4: Creación de Servidores Web con Express

22 de octubre de 2026 · 09:00 a 13:00 hrs.

### 4.1 · Servidor HTTP sin frameworks

**Idea clave:** El módulo http permite crear un servidor con createServer, pero rutas, métodos y cuerpos de petición se manejan a mano.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [CREANDO SERVIDOR WEB(HTTP) EN NODE JS: Cómo crear un servidor HTTP en Node JS!](https://www.youtube.com/watch?v=LKAP27VBBKw)  (canal: Truzz Blogg) |
| **Refuerzo** | [4 - Node.JS ¡desde CERO! - Creación de un servidor local y uso de nodemon](https://www.youtube.com/watch?v=ZvzP5bmQhGI) |

**Caso de uso real:** Un servidor mínimo con las rutas /, /saludo y un 404 personalizado.

**Pregunta para pensar:** ¿Qué tareas tendrías que resolver a mano que Express simplifica?

### 4.2 · Introducción a Express y middleware

**Idea clave:** Un middleware es una función con acceso a req, res y next(); se ejecutan en el orden en que se declaran. Si no llama a next() ni responde, la petición queda colgada.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [27. Ejemplo de middleware en Express](https://www.youtube.com/watch?v=rA6Fgm7FL9E) |
| **Refuerzo (curso completo)** | [Aprende Node.js y Express - Curso desde Cero](https://www.youtube.com/watch?v=1hpc70_OoAg)  (canal: freeCodeCamp Español; 8.5 horas) |

*Ojo: El curso completo no se revisó por capítulos: localiza el apartado de middleware antes de asignarlo.*

**Caso de uso real:** Registrar cada petición y exigir una API key antes de llegar a las rutas.

**Pregunta para pensar:** ¿Qué ocurre con la petición si un middleware no llama a next() ni envía respuesta?

### 4.3 · Enrutamiento y API REST

**Idea clave:** Cada ruta combina verbo HTTP, ruta y código de estado: GET 200, POST 201, PUT 200/404, DELETE 204; req.params captura parámetros de ruta y req.body el JSON enviado.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [API REST con Node js y Express](https://www.youtube.com/watch?v=BImKbdy-ubM)  (canal: MonkeyWit; primera API en 30 minutos) |
| **Refuerzo** | [APIs con Node.js y Express - Curso desde cero](https://www.youtube.com/watch?v=yd_QpXWrbtQ)  (canal: freeCodeCamp Español) |
| **Opcional** | [Desarrollá un CRUD completo con Node.js, Express, Sequelize y MySQL](https://www.youtube.com/watch?v=6XekziKVWOM)  (canal: Alien Explorer) |

*Ojo: El video opcional usa MySQL y Sequelize en lugar de MongoDB; sirve para ver la estructura del CRUD.*

**Caso de uso real:** Una API de tareas con GET, POST, PUT y DELETE sobre /tareas.

**Pregunta para pensar:** ¿Qué código de estado devolverías si el cliente crea una tarea sin título, y por qué?

### 4.4 · Motores de plantillas vs. APIs

**Idea clave:** Un motor de plantillas como EJS genera HTML en el servidor; una API REST devuelve datos (JSON) para que otro cliente decida cómo mostrarlos.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Node.js 8 \| App de Tareas con EJS y Express.js](https://www.youtube.com/watch?v=7IBcDIb8XmQ)  (canal: Fazt) |
| **Refuerzo** | [2/3 - CRUD con Node Js - Plantillas EJS - Mostrar y Crear registros](https://www.youtube.com/watch?v=fLIwK292RPY)  (canal: Informática DP) |

*Ojo: El primer video es de 2017; confirma que la sintaxis de EJS que muestra sigue vigente.*

**Caso de uso real:** Una página de reporte renderizada con EJS frente a una app móvil que consume /tareas.

**Pregunta para pensar:** ¿Qué enfoque elegirías si la misma información debe servirse a una página web y a una app móvil?

**Cierre:** Express convierte peticiones en una cadena de funciones; la ruta decide la respuesta y el middleware controla lo que ocurre antes.

Actividad 4: entrega la API de tareas (ejercicio 4.3) y la vista EJS del ejercicio integrador, con comentarios que indiquen qué middleware usa, qué códigos de estado devuelve y por qué. Entrégalo antes de la Sesión 5.

## Sesión 5: Persistencia de Datos y Despliegue

23 de octubre de 2026 · 09:00 a 13:00 hrs.

### 5.1 · Conexión a bases de datos: MongoDB y Mongoose

**Idea clave:** Un Schema define campos, tipos y validaciones; el Model, creado a partir de él, ofrece create() y find() para guardar y consultar documentos.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [MongoDB - CRUD con Node Js y Mongoose](https://www.youtube.com/watch?v=u6PGbw1tfGM) |
| **Refuerzo** | [Stack MERN #3, Conexión a la base de datos MongoDB](https://www.youtube.com/watch?v=754GNtT-PMs)  (canal: Fazt Code) |

**Caso de uso real:** Las tareas de la API persisten aunque se reinicie el servidor.

**Pregunta para pensar:** ¿Qué aporta el Schema frente a guardar objetos JavaScript sin validar?

### 5.2 · Variables de entorno con dotenv

**Idea clave:** Las credenciales viven en un archivo .env que se carga con dotenv hacia process.env, y .env se excluye del repositorio con .gitignore.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Variables de Entorno en Node.js (.env)](https://www.youtube.com/watch?v=QVktixQBKEg) |
| **Refuerzo** | [CÓMO USAR VARIABLES DE ENTORNO EN NODE.JS](https://www.youtube.com/watch?v=WsAPow3rv1w) |
| **Opcional** | [Nodejs Express dotenv variables de entorno](https://www.youtube.com/watch?v=Wfh50TUxVJc)  (canal: Aprende Web) |

**Caso de uso real:** La cadena de conexión a la base de datos se mantiene fuera del código y fuera de GitHub.

**Pregunta para pensar:** ¿Por qué .env.example sí puede subirse al repositorio y .env no?

### 5.3 · Debugging con las herramientas de Node.js y VS Code

**Idea clave:** El depurador permite pausar la ejecución con breakpoints, inspeccionar variables y seguir el call stack, en lugar de depender solo de console.log.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Depuración de Código (Debug en JavaScript) \| JavaScript Debug Terminal \| Curso Node.js # 18](https://www.youtube.com/watch?v=0GYQ2HYajbw) |
| **Refuerzo** | [N° 36 \| Depurar JS (Node.js) en Visual Studio Code \| Curso de Node.js y Express](https://www.youtube.com/watch?v=krravJkEOCY) |
| **Opcional (inglés)** | [How to Debug Node In VS Code - Break Points and Console Window](https://www.youtube.com/watch?v=vl32ue9xm2g) |

**Caso de uso real:** Encontrar por qué un cálculo de totales devuelve un valor incorrecto.

**Pregunta para pensar:** ¿Qué información te da un breakpoint que un console.log no te da?

### 5.4 · Introducción al despliegue

**Idea clave:** Una plataforma como Render conecta con el repositorio de GitHub, ejecuta npm install y npm start, y toma las variables de entorno de su propio panel.

| **Tipo** | **Video (clic para abrir)** |
| --- | --- |
| **Principal** | [Despliegue de NODE JS en RENDER](https://www.youtube.com/watch?v=Ck9O-QhSnNo)  (canal: MonkeyWit) |
| **Refuerzo** | [Cómo Desplegar una App Node.js en Render Paso a Paso](https://www.youtube.com/watch?v=tR-e9r0gYvI)  (canal: Dikean Code) |
| **Opcional** | [Cómo hacer Deploy GRATIS de tu API REST hecha con Node.js con Render](https://www.youtube.com/watch?v=K0GM-GvxooY)  (canal: Developero) |

*Ojo: Los planes gratuitos y la interfaz de Render cambian con frecuencia; verifica los pasos contra la documentación vigente. Railway y Vercel no están cubiertos.*

**Caso de uso real:** Publicar la API de tareas con una URL pública HTTPS.

**Pregunta para pensar:** ¿Por qué la plataforma necesita un script start en el package.json?

**Cierre:** Persistir, proteger la configuración, depurar y publicar convierten un ejercicio local en una aplicación que otros pueden usar.

Actividad 5 (proyecto integrador): entrega el repositorio de tu API con README, base de datos, variables de entorno y, si es posible, la URL de despliegue.

## Cursos completos en español de apoyo

Opciones para quien quiera repasar o avanzar; no se revisaron por capítulos.

- [Aprende Node.js y Express - Curso desde Cero (8.5 horas)](https://www.youtube.com/watch?v=1hpc70_OoAg)
- [Curso Node.js desde 0 (lista de reproducción)](https://www.youtube.com/playlist?list=PL_wRgp7nihybJkFgDxd-LBZgmSIVdy3rd)
- [Curso de Node.js completo desde cero (lista de reproducción)](https://www.youtube.com/playlist?list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7)

*Fin del manual del curso Node.js Básico — REDEC-UNAM / Educación Continua FESC.*
