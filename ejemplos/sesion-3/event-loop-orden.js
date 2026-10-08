console.log('1. Inicio del script');

setTimeout(() => console.log('4. Timeout (macrotask)'), 0);

Promise.resolve().then(() => console.log('3. Promise (microtask)'));

console.log('2. Fin del script');

// Orden de salida:
// 1. Inicio del script
// 2. Fin del script
// 3. Promise (microtask)
// 4. Timeout (macrotask)
