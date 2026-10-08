const os = require('os');

console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Memoria libre (bytes):', os.freemem());
console.log('Memoria total (bytes):', os.totalmem());
console.log('Núcleos de CPU:', os.cpus().length);
console.log('Usuario actual:', os.userInfo().username);
