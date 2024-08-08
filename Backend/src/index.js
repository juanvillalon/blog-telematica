import Koa from 'koa';
import bodyParser from 'koa-body'; // Cambiado a `koa-body` si decides usarlo
import router from './router/index.js'; // Asegúrate de usar la extensión del archivo
import cors from '@koa/cors';

const app = new Koa();

app.use(cors());
app.use(bodyParser({ multipart: true, urlencoded: true }));

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
