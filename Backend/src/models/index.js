import Sequelize from 'sequelize';
import UserModel from './user.js'; // Assuming your user model is named `user.js`
import TeamModel from './team.js'; // Assuming your user model is named `user.js`
import config from '../config/config.js';

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize, Sequelize.DataTypes);
db.Team = TeamModel(sequelize, Sequelize.DataTypes);

export default db;

