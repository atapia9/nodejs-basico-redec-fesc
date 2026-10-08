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
