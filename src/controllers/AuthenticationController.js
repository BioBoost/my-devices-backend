const Users = require('../repositories/Users');
const Responder = require('../helpers/responder.js');

module.exports = {
  async register(req, res) {
    try {
      let user = await Users.create(req.body);

      user = await Users.findById(user.id, {excludeAttributes: ["password"]});
      if (!user) Responder.resource_not_found(res, 'user');
      else {
        req.login(user, function(err) {
          if (err) {
            Responder.unknown(res, 'Failed to login new user.');
          }
          res.send(user);
        });
      }
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        Responder.conflict(res, "This email address is already in use.");
      } else {
        console.log(error);
        Responder.internal(res, 'An error occurred while retrieving user info.');
      }
    }
  },

  async login(req, res) {
    const user = await Users.findById(req.user.id, {excludeAttributes: ["password"]});
    if (!user) Responder.resource_not_found(res, 'user');
    else res.send(user);
  },

  async logout(req, res) {
    req.logOut();
    res.send({ message: "Successfully logged out"});
  }
};
