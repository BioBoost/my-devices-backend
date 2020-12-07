const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  general: {
    environment: process.env.NODE_ENV || "development",
    port: process.env.BACKEND_PORT || 8081,
    domain: process.env.BACKEND_DOMAIN || "localhost",
    protocol: process.env.BACKEND_PROTOCOL || "http"
  },
  frontend: {
    protocol: process.env.FRONTEND_PROTOCOL || "http",
    domain: process.env.FRONTEND_DOMAIN || "localhost",
    port: process.env.FRONTEND_PORT || 8080
  },
  authentication: {
    secret: process.env.SESSION_SECRET || "thisisnotverysecret"
  },
};
