import Router from 'koa-router';
import getHealth from './health/health';
import db from '../models';  // Importa los modelos inicializados

const router = new Router();

router.get('/health', getHealth);

router.get('/api/saludo', async ctx => {
  const User = db.User;
  const newUser = await User.create({ username: 'john_doe', email: 'john@example.com' });
  ctx.body = { mensaje: '¡Hola desde Koa!', user: newUser };
});

/*
router.get('/api/userDB/:correo', usersDB.getUser);  //Obtener cierto usuario por correo
router.get('/api/userDB', usersDB.getAllUsers);    //Obtener todos los usuarios
router.put('/api/userDB', usersDB.registrarUser); //Ingresar un Usuario
router.post('/api/userDB', usersDB.loginUser); //Login
*/

export default router;
