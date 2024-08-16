// src/models/team.js
import { DataTypes } from 'sequelize';

const TeamModel = (sequelize) => {
  const Team = sequelize.define('Team', {
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageSrc: {
      type: DataTypes.STRING,
    },
    vulnerabilities: {
      type: DataTypes.JSON,
    },
    flags: {
      type: DataTypes.JSON,
    },
  });

  return Team;
};

export default TeamModel;
