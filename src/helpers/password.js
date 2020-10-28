const bcrypt = require("bcrypt");

module.exports = {
  async hash(password) {
    const SALT_FACTOR = 10;
    return bcrypt.hash(password, SALT_FACTOR);
  },

  async match(first, second) {
    return bcrypt.compare(first, second);
  }
};
