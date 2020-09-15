import { Sequelize } from "sequelize";
import { config } from "../config/config";

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: "localhost",
    dialect: "mssql",
  }
);
