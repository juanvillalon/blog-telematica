import db from '../../models/index.js';

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

const getAllUsers = async (ctx) => {
  try {
    const users = await db.User.findAll({ attributes: ['username', 'email'] });
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al obtener los usuarios', error: error.message };
  }
};

const getUserByEmail = async (ctx) => {
  try {
    const { mail } = ctx.params;
    const user = await db.User.findOne({ where: { email: mail }, attributes: ['username', 'email'] });
    if (user) {
      ctx.body = user;
    } else {
      ctx.status = 404;
      ctx.body = { mensaje: 'Usuario no encontrado' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al obtener el usuario', error: error.message };
  }
};

const addNewUser = async (ctx) => {
  try {
    const { username, email, password } = ctx.request.body;
    const newUser = await db.User.create({ username, email, password });
    ctx.status = 201;
    ctx.body = { mensaje: 'Usuario creado exitosamente', user: newUser };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al crear el usuario', error: error.message };
  }
};

const deleteUser = async (ctx) => {
  try {
    const { mail } = ctx.params;
    const user = await db.User.findOne({ where: { email: mail } });
    if (user) {
      await user.destroy();
      ctx.body = { mensaje: 'Usuario eliminado exitosamente' };
    } else {
      ctx.status = 404;
      ctx.body = { mensaje: 'Usuario no encontrado' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al eliminar el usuario', error: error.message };
  }
};

export default {
  test,
  getAllUsers,
  getUserByEmail,
  addNewUser,
  deleteUser,
};
