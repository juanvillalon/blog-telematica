import { DataTypes, Model } from 'sequelize';

class User extends Model {}

const initUserModel = (sequelize) => {
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};

export default initUserModel;
