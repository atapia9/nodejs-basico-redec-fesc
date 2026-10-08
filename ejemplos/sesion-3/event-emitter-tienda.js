const { EventEmitter } = require('events');

class TiendaEnLinea extends EventEmitter {
  registrarPedido(pedido) {
    console.log('Procesando pedido...');
    // lógica de negocio...
    this.emit('pedidoCreado', pedido);
  }
}

const tienda = new TiendaEnLinea();

tienda.on('pedidoCreado', (pedido) => {
  console.log(`Enviar correo de confirmación para el pedido #${pedido.id}`);
});

tienda.on('pedidoCreado', (pedido) => {
  console.log(`Actualizar inventario tras el pedido #${pedido.id}`);
});

tienda.registrarPedido({ id: 1001, total: 599.0 });
