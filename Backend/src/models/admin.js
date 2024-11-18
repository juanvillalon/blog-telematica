const AdminModel = (sequelize, DataTypes) => {
    const Admin = sequelize.define('Admin', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Admin;
  };
  
  export default AdminModel;
  