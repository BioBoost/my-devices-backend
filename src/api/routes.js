const DeviceController = require("../controllers/DeviceController");
const AuthenticationController = require("../controllers/AuthenticationController");

const passport = require('passport');
const Authorization = require('../helpers/authorization');

// Validation
const validate = require('../validation/validate');
const deviceSchema = require('../validation/schemas/device');
const userSchema = require('../validation/schemas/user');

const express = require("express");
app = express.Router();

// Welcome
app.get("/", Authorization.required, (req, res) => {
  res.send({
    message: `Welcome ${req.user.firstname} ${req.user.lastname}`,
  });
});

// Authentication
app.post(
  "/register",
  Authorization.none,
  validate.body(userSchema.register.body),
  AuthenticationController.register
);

// Use passport authentication middleware
app.post('/login', passport.authenticate('local', {
  failureRedirect: '/'
}), AuthenticationController.login);

// Clear session
app.delete('/logout', Authorization.required, AuthenticationController.logout);

// Devices
// TODO - Need authorization once students are ready
app.get('/devices', DeviceController.index);
app.get('/devices/:id', DeviceController.show);
app.post('/devices', validate.body(deviceSchema.create.body), DeviceController.create);
app.patch('/devices/:id/claim', Authorization.required, DeviceController.claim);

module.exports = app;