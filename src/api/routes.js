const DeviceController = require("../controllers/DeviceController");

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

module.exports = app;