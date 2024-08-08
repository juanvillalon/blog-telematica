import db from '../../models/index.js'; // Asegúrate de la ruta correcta

const test = async (ctx) => {
  try {
    const User = db.User;
    const newUser = await User.create({ username: 'john_doe', password: 'john@example.com' });
    ctx.body = { mensaje: '¡Hola desde Koa!', user: newUser };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al crear el usuario', error: error.message };
  }
};

export default { test };
