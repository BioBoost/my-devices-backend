const app = require('./app');
const config = require("./config/config");

console.log("Starting server process");
app.listen(config.general.port, () => {
  console.log(`Express server listening on ${config.general.port}, in ${app.get('env')} mode`);
});
