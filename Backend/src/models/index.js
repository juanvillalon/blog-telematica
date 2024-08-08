import { Sequelize } from 'sequelize';
import config from '../config/config.js'; // Verifica que esta ruta sea correcta
import UserModel from './user.js'; // Usa la extensión del archivo

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
  User: UserModel(sequelize) // Llama a la función exportada
};

export default db;

