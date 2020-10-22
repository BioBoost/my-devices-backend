const dotenv = require("dotenv");
dotenv.config();

// General config
let databaseConfig = {
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 3306,
  dialect: process.env.DB_DRIVER || "mariadb",
  dialectOptions: {
    timezone: process.env.DB_TIMEZONE || "Etc/GMT+1"
  },
  pool: {
    min: Number(process.env.DB_POOL_MIN) || 0,
    max: Number(process.env.DB_POOL_MAX) || 5,
    acquire: process.env.DB_POOL_ACQUIRE || 30000,
    idle: process.env.DB_POOL_IDLE || 10000
  }
};

// Environment specific configs
const environment = process.env.NODE_ENV || "development";

if (environment === "development") {
  databaseConfig.host = process.env.DB_HOST || "127.0.0.1";
  databaseConfig.database = process.env.DB_NAME || ("my-devices-develop");
  databaseConfig.username = process.env.DB_USERNAME || "mydevicesdevelop";
  databaseConfig.password = process.env.DB_PASSWORD || "mydevicesdevelop";
} else if (environment === 'production') {
  databaseConfig.host = process.env.DB_HOST || "env-not-set";
  databaseConfig.database = process.env.DB_NAME || "env-not-set";
  databaseConfig.username = process.env.DB_USERNAME || "env-not-set";
  databaseConfig.password = process.env.DB_PASSWORD || "env-not-set";
}

module.exports = databaseConfig;