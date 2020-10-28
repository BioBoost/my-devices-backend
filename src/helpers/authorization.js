const Responder = require('./responder.js');

module.exports = {
  required: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      Responder.unauthorized(res);
    }
  },

  none: (req, res, next) => {
    if (req.isAuthenticated()) {
      Responder.conflict(res, "You are already logged in");
    } else {
      next();
    }
  }
}
