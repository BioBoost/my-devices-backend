const DeviceController = require("../controllers/DeviceController");
const IPReportController = require("../controllers/IPReportController");
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
app.get('/devices', Authorization.required, DeviceController.index);
app.get('/devices/:id', Authorization.required, DeviceController.show);
app.post('/devices', Authorization.required, validate.body(deviceSchema.create.body), DeviceController.create);
app.patch('/devices/:id/claim', Authorization.required, DeviceController.claim);
app.patch('/devices/:id/release', Authorization.required, DeviceController.release);

// Reports
app.get('/ipreports/orphaned', Authorization.required, IPReportController.orphaned);
app.post('/ipreports', IPReportController.create);    // NEEDS Auth LATER !

module.exports = app;