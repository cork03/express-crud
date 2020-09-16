const dorenv = require("dotenv");

dorenv.config();

module.exports = config = {
  host: process.env.HOST,
  database: process.env.DATABASE_NAME || "localhost",
  username: process.env.USER_NAME || "root",
  password: process.env.DATABASE_PASSWORD || "",
  dialect: "mysql",
};
