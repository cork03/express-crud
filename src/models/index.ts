import { Sequelize } from "sequelize";
import config from "../config/config";

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

export const connect = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Success test connection");
    })
    .catch((error) => {
      console.log("Failure test connection", error);
    });
};
