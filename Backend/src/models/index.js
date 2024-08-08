// src/models/index.js
import { Sequelize } from 'sequelize';
import config from '../config/config.js'; // Verifica que esta ruta sea correcta

const env = process.env.NODE_ENV || 'development';
const configEnv = config[env];

const sequelize = new Sequelize(configEnv.database, configEnv.username, configEnv.password, {
  host: configEnv.host,
  dialect: configEnv.dialect,
  logging: false, // Opcional
});

const db = {
  sequelize,
  Sequelize,
};

// Importa los modelos aquí
db.User = require('./user').default(sequelize, Sequelize);

export default db;
