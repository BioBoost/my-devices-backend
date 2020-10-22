const DeviceController = require("../controllers/DeviceController");

// Validation
const validate = require('../validation/validate');
const deviceSchema = require('../validation/schemas/device');

const express = require("express");
app = express.Router();

// Welcome
app.get("/", (req, res) => {
  res.send({
    message: `Welcome to the API of My-Devices`,
  });
});

// Devices
app.get('/devices', DeviceController.index);
app.get('/devices/:id', DeviceController.show);
app.post('/devices', validate.body(deviceSchema.create.body), DeviceController.create);

module.exports = app;