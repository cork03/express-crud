import Sequelize, { Model } from "sequelize";


class User extends Model {}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    loginId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    authorize_token: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    iconUrl: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    createAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  {
      sequelize: ,
      modelName: 'users'
  }
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
