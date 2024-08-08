module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'db',
    host: 'blog-telematica-db-1',  // Aquí debe coincidir con el nombre del servicio de la base de datos en el YAML
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'db',
    host: 'blog-telematica-db-1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'root',
    database: 'db',
    host: 'blog-telematica-db-1',
    dialect: 'mysql',
  },
};
