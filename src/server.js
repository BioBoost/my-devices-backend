const config = require("./config/config");
const app = require('./app');
const { sequelize } = require("./models");

console.log("Checking database connection ...");
sequelize.authenticate()
.then(() => {
  console.log("Database connection ok");
  console.log("Starting server process");
  app.listen(config.general.port, () => {
    console.log(`Express server listening on ${config.general.port}, in ${app.get('env')} mode`);
  });
})
.catch((err) => {
  console.log("Not connected to database");
});
