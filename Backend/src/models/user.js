export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
  
    User.associate = function(models) {
      // Asociaciones de modelos si es necesario
    };
  
    return User;
  };
  