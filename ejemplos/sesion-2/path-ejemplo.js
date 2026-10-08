const path = require('path');

const ruta = '/usuarios/armando/proyectos/app.js';

console.log(path.basename(ruta));   // 'app.js'
console.log(path.dirname(ruta));    // '/usuarios/armando/proyectos'
console.log(path.extname(ruta));    // '.js'
console.log(path.join(__dirname, 'datos', 'archivo.txt'));
console.log(path.resolve('datos', 'archivo.txt'));
