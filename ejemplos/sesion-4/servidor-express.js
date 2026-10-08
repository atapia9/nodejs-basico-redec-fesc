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
