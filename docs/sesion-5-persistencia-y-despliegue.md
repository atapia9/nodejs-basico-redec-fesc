# 9. Sesión 5 — Persistencia de Datos y Despliegue

| **Fecha** | Viernes 23 de octubre de 2026 |
| --- | --- |
| **Horario** | 09:00 a 13:00 hrs. (4 horas) |
| **Tema del cronograma** | Tema 5: Persistencia de Datos y Despliegue |

## Distribución de la sesión

| **Horario** | **Actividad** | **Descripción** |
| --- | --- | --- |
| **09:00–09:15** | Repaso | Repaso rápido de la Sesión 4 y resolución de dudas. |
| **09:15–10:15** | Teoría/práctica 5.1 | Conexión a bases de datos: introducción a MongoDB (con Mongoose) o SQLite. |
| **10:15–10:45** | Teoría/práctica 5.2 | Variables de entorno: uso de dotenv para proteger credenciales y configuraciones. |
| **10:45–11:00** | Receso | Pausa activa. |
| **11:00–11:40** | Teoría/práctica 5.3 | Debugging: uso de las herramientas de inspección de Node.js y VS Code. |
| **11:40–12:20** | Teoría/práctica 5.4 | Introducción al despliegue: subir una app a servicios como Render, Railway o Vercel. |
| **12:20–13:00** | Cierre | Evaluación final y entrega del proyecto integrador. |

## 5.1 Conexión a bases de datos: MongoDB (Mongoose) o SQLite

Hasta ahora los ejemplos guardaron datos en memoria (arreglos), que se pierden al reiniciar el servidor. Para persistir datos de forma real se conecta la aplicación a una base de datos. Se presentan dos alternativas comunes para un proyecto pequeño o de aprendizaje: MongoDB (base de datos NoSQL orientada a documentos, usada junto con el ODM Mongoose) y SQLite (base de datos relacional ligera, basada en un solo archivo, sin necesidad de un servidor externo).

La Figura 5.1 muestra cómo un objeto JavaScript recibido por Express pasa por el Schema y el Model de Mongoose, que lo validan y lo guardan como documento en MongoDB; al final se menciona la alternativa con SQLite.

![Flujo de persistencia en tres pasos: 1 el controlador de Express (app.post con Tarea.create) recibe un objeto JavaScript; 2 Mongoose (ODM) lo valida con un Schema y un Model; 3 MongoDB lo guarda como documento BSON en la colección tareas con un _id único. Arriba, la conexión con process.env.MONGODB_URI; abajo, la alternativa con SQLite (better-sqlite3).](../assets/figuras/fig-5-1.png)

*Figura 5.1: Flujo de persistencia: Express, Mongoose (ODM) y MongoDB*

### Opción A: MongoDB con Mongoose

```bash
npm install mongoose
```

```js
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error de conexión:', error.message));

const tareaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  completada: { type: Boolean, default: false },
  creadaEn: { type: Date, default: Date.now },
});

const Tarea = mongoose.model('Tarea', tareaSchema);

// Uso dentro de una ruta Express
app.post('/tareas', async (req, res) => {
  try {
    const tarea = await Tarea.create({ titulo: req.body.titulo });
    res.status(201).json(tarea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/tareas', async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
});
```

### Opción B: SQLite (better-sqlite3)

```bash
npm install better-sqlite3
```

```js
const Database = require('better-sqlite3');
const db = new Database('datos.sqlite');

db.exec(`
  CREATE TABLE IF NOT EXISTS tareas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    completada INTEGER DEFAULT 0
  )
`);

app.post('/tareas', (req, res) => {
  const stmt = db.prepare('INSERT INTO tareas (titulo) VALUES (?)');
  const resultado = stmt.run(req.body.titulo);
  res.status(201).json({ id: resultado.lastInsertRowid, titulo: req.body.titulo });
});

app.get('/tareas', (req, res) => {
  const tareas = db.prepare('SELECT * FROM tareas').all();
  res.json(tareas);
});
```

> **Ejercicio 5.1 — Persistir la API de tareas**
>
> - Elige MongoDB+Mongoose o SQLite y conecta tu API de tareas (Sesión 4) a la base de datos elegida.
> - Sustituye el arreglo en memoria por operaciones reales contra la base de datos en las rutas GET, POST, PUT y DELETE.
> - Reinicia el servidor y confirma que los datos persisten entre reinicios.

## 5.2 Variables de entorno con dotenv

Las credenciales (cadenas de conexión, llaves de API, contraseñas) nunca deben escribirse directamente en el código fuente ni subirse a un repositorio. El paquete dotenv permite cargar variables desde un archivo .env (que se excluye del control de versiones) hacia process.env.

```bash
npm install dotenv
```

```text
# archivo .env (NO subir a git)
PORT=3000
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/curso
JWT_SECRET=una-clave-larga-y-secreta
```

```js
// primera línea del archivo principal, antes de usar process.env
require('dotenv').config();

const PUERTO = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.listen(PUERTO, () => {
  console.log(`Servidor en el puerto ${PUERTO}`);
});
```

```text
# archivo .gitignore
node_modules/
.env
```

Es buena práctica incluir un archivo .env.example con las variables necesarias pero sin valores reales, para que otros desarrolladores sepan qué configurar.

> **Ejercicio 5.2 — Externalizar la configuración**
>
> - Crea un archivo .env con al menos PORT y la cadena de conexión a tu base de datos.
> - Modifica tu aplicación para leer toda configuración sensible desde process.env, sin valores 'quemados' en el código.
> - Agrega .env al .gitignore y crea un .env.example de referencia.

## 5.3 Debugging: herramientas de inspección

Node.js incluye un depurador integrado (Inspector Protocol) accesible desde la línea de comandos o desde editores como Visual Studio Code, lo que permite colocar breakpoints, inspeccionar variables y avanzar la ejecución paso a paso, en lugar de depender únicamente de console.log.

```bash
# Iniciar la app en modo inspección
node --inspect index.js

# Pausar automáticamente en la primera línea
node --inspect-brk index.js
```

En Chrome, se puede abrir chrome://inspect para conectar al proceso y usar las DevTools. En VS Code, basta con crear una configuración de depuración:

```jsonc
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Depurar index.js",
      "program": "${workspaceFolder}/index.js",
      "restart": true,
      "console": "integratedTerminal"
    }
  ]
}
```

- Breakpoints: clic en el margen izquierdo del editor junto al número de línea.
- Panel de variables: inspecciona el valor de variables locales, closures y globales en el punto detenido.
- Consola de depuración: permite evaluar expresiones arbitrarias mientras la ejecución está pausada.
- Stack de llamadas: muestra la cadena de funciones que llevaron al punto actual, útil para rastrear el origen de un error.

> **Ejercicio 5.3 — Depurar un error**
>
> - El instructor compartirá un pequeño script con un bug (por ejemplo, un cálculo incorrecto de totales).
> - Coloca un breakpoint antes del cálculo y usa el depurador de VS Code para inspeccionar el valor real de las variables involucradas.
> - Identifica y corrige el bug; documenta en un comentario cuál fue la causa raíz.

## 5.4 Introducción al despliegue

Una vez que la aplicación funciona localmente, el siguiente paso es publicarla en un servicio en la nube para que sea accesible públicamente. Se revisan tres opciones populares para proyectos pequeños y medianos, todas con planes gratuitos o de bajo costo para aprendizaje:

La Figura 5.2 resume el flujo de punta a punta: desarrollo local con .env protegido por .gitignore, push a GitHub, detección del cambio por la plataforma, variables de entorno configuradas en su panel y publicación de una URL pública HTTPS.

![Flujo de despliegue continuo en cuatro pasos: 1 entorno local (VS Code, con .env y node_modules protegidos en .gitignore), 2 control de versiones (git add, commit y push a GitHub), 3 plataforma PaaS como Render o Railway (detecta el push, ejecuta npm install y npm start y usa las variables de entorno) y 4 producción con una URL pública HTTPS. Incluye una tabla de variables de entorno (MONGODB_URI, JWT_SECRET y PORT) y una nota sobre el despliegue automático.](../assets/figuras/fig-5-2.png)

*Figura 5.2: Flujo de despliegue continuo (CI/CD) a la nube*

### Render / Railway (backend + base de datos)

- Conectan directamente con un repositorio de GitHub y despliegan automáticamente en cada push.
- Permiten definir variables de entorno desde su panel (sustituyendo el archivo .env local).
- Ofrecen bases de datos administradas (PostgreSQL, Redis) e integran fácilmente con MongoDB Atlas.

### Vercel (ideal para frontend y funciones serverless)

- Pensado originalmente para aplicaciones frontend (Next.js, React), pero soporta funciones serverless en Node.js.
- Cada función se ejecuta bajo demanda; no mantiene un proceso Node.js corriendo permanentemente como Render o Railway.

Pasos generales para desplegar una API Express en Render:

1. Subir el proyecto a un repositorio de GitHub, asegurando que .env y node_modules estén en .gitignore.
2. Verificar que package.json tenga un script start que ejecute la app: "start": "node index.js".
3. Crear un nuevo 'Web Service' en Render y conectarlo al repositorio.
4. Configurar las variables de entorno (MONGODB_URI, etc.) desde el panel de Render, no en el código.
5. Definir el comando de build (npm install) y de arranque (npm start).
6. Desplegar y verificar los logs; probar los endpoints con la URL pública asignada.

> **Ejercicio 5.4 — Desplegar la aplicación**
>
> - Sube tu proyecto final a un repositorio de GitHub (público o privado).
> - Crea una cuenta en Render o Railway y despliega tu API de tareas conectada a la base de datos.
> - Configura las variables de entorno necesarias desde el panel del servicio, sin subir el archivo .env.
> - Verifica que la API responda correctamente desde la URL pública usando Postman o el navegador, y comparte el enlace con el grupo.
