import Router from 'koa-router';
import getHealth from './health/health.js'; // Asegúrate de usar la extensión del archivo
import user from './user/user.js'; // Asegúrate de usar la extensión del archivo

const router = new Router();

router.get('/health', getHealth);
router.get('/api/saludo', user.test); // Corregido el endpoint

export default router;
