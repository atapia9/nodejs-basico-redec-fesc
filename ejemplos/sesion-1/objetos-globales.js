console.log(typeof window);   // 'undefined' en Node.js
console.log(typeof global);   // 'object'
console.log(typeof globalThis); // 'object' (estándar, funciona en navegador y Node)

// Variables 'globales' propias de cada módulo en Node.js:
console.log(__dirname); // ruta absoluta del directorio del archivo actual
console.log(__filename); // ruta absoluta del archivo actual
console.log(process.version); // versión de Node.js en ejecución
