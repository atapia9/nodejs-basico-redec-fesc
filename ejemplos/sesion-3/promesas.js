function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) return reject(new Error('ID inválido'));
      resolve({ id, nombre: 'Armando' });
    }, 500);
  });
}

// Con .then()/.catch()
obtenerUsuario(1)
  .then((usuario) => console.log('Usuario:', usuario))
  .catch((error) => console.error('Error:', error.message));

// Con async/await (más legible)
async function main() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log('Usuario:', usuario);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
main();
