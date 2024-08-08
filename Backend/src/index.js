import Koa from 'koa';
import bodyParser from 'koa-body';
import router from './router/index';
import db from './models';  // Importa los modelos inicializados
require('@babel/register');
const cors = require('@koa/cors');

const app = new Koa();

app.use(cors());
app.use(bodyParser({ multipart: true, urlencoded: true }));

router.get('/api/saludo', async ctx => {
  const User = db.User;
  const newUser = await User.create({ username: 'john_doe', email: 'john@example.com' });
  ctx.body = { mensaje: '¡Hola desde Koa!', user: newUser };
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 3001;
db.sequelize.sync().then(() => {  // Sincroniza la base de datos
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
  });
});
