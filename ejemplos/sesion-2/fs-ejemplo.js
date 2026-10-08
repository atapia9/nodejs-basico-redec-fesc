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
