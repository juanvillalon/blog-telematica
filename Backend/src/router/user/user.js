
router.get('/api/saludo', async ctx => {
  const User = db.User;
  const newUser = await User.create({ username: 'john_doe', email: 'john@example.com' });
  ctx.body = { mensaje: '¡Hola desde Koa!', user: newUser };
});
