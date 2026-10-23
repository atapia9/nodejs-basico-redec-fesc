// calculadora-totales.js
const carrito = [
  { producto: 'Teclado', precio: 350, cantidad: 2 },
  { producto: 'Mouse', precio: 180, cantidad: 1 },
  { producto: 'Monitor', precio: 2500, cantidad: 1 },
];

function calcularTotal(items) {
  let total = '0';
  for (const item of items) {
    total = total + item.precio * item.cantidad;
  }
  return total;
}

const subtotal = calcularTotal(carrito);
const iva = subtotal * 0.16;
const totalConIva = subtotal + iva;

console.log(`Subtotal: $${subtotal}`);
console.log(`IVA (16%): $${iva}`);
console.log(`Total: $${totalConIva}`);
