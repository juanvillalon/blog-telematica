import db from '../../models/index.js';
import bcrypt from 'bcryptjs';

const getAllUsers = async (ctx) => {
  try {
    const users = await db.Admin.findAll({ attributes: ['username', 'email'] });
    ctx.body = users;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al obtener los usuarios', error: error.message };
  }
};

const getUserByEmail = async (ctx) => {
  try {
    const { mail } = ctx.params;
    const user = await db.Admin.findOne({ where: { email: mail }, attributes: ['username', 'email'] });
    if (user) {
      ctx.body = user.username;
    } else {
      ctx.status = 404;
      ctx.body = { mensaje: 'Usuario no encontrado' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al obtener el usuario', error: error.message };
  }
};

const addAdminUser = async (ctx) => {
    try {
      const { username, email, password } = ctx.request.body; 
      // Encripta la contraseña antes de guardarla
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.Admin.create({ username, email, password: hashedPassword });
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
    const user = await db.Admin.findOne({ where: { email: mail } });
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

const loginUser = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;

    // Busca al usuario en la base de datos
    const user = await db.Admin.findOne({ where: { email } });

    if (!user) {
      ctx.status = 401; // Unauthorized
      ctx.body = { mensaje: 'Usuario o contraseña incorrectos' };
      return;
    }

    // Compara la contraseña ingresada con la almacenada
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      ctx.status = 401; // Unauthorized
      ctx.body = { mensaje: 'Usuario o contraseña incorrectos' };
      return;
    }

    // Si las credenciales son correctas, puedes generar un token o simplemente confirmar el login
    ctx.body = { mensaje: 'Login exitoso', user: { username: user.username, email: user.email } };

  } catch (error) {
    ctx.status = 500;
    ctx.body = { mensaje: 'Error al intentar iniciar sesión', error: error.message };
  }
};





export default {
  getAllUsers,
  getUserByEmail,
  addAdminUser,
  deleteUser,
  loginUser
};
