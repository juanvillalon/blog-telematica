import Router from 'koa-router';
import getHealth from './health/health.js';
import user from './user/user.js';
import team from './team/team.js';

const router = new Router();

router.get('/health', getHealth);

// Saludo endpoint
router.get('/api/saludo', user.test);

// User CRUD endpoints
router.get('/api/user', user.getAllUsers); // Obtener todos los usernames y mails de los usuarios
router.get('/api/user/:mail', user.getUserByEmail); // Obtener un usuario por mail
router.put('/api/user', user.addNewUser); // Agregar un nuevo usuario a la BD
router.delete('/api/user/:mail', user.deleteUser); // Eliminar un usuario por mail

router.get('/api/team', team.getAllTeams); // Obtener todos los usernames y mails de los usuarios
router.put('/api/team', team.addNewTeam); // Agregar un nuevo usuario a la BD
router.delete('/api/team/:teamName', team.deleteTeam); // Eliminar un usuario por mail
export default router;
 