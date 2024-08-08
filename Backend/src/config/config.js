module.exports = {
  development: {
    username: 'user',
    password: '123',
    database: 'db',
    host: '172.19.0.3',  // Aquí debe coincidir con el nombre del servicio de la base de datos en el YAML
    dialect: 'mysql',
  },
  test: {
    username: 'user',
    password: '123',
    database: 'db',
    host: '172.19.0.3',
    dialect: 'mysql',
  },
  production: {
    username: 'user',
    password: '123',
    database: 'db',
    host: '172.19.0.3',
    dialect: 'mysql',
  },
};
