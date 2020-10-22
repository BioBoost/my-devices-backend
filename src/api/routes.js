const express = require("express");
app = express.Router();

// Welcome
app.get("/", (req, res) => {
  res.send({
    message: `Welcome to the API of My-Devices`,
  });
});

module.exports = app;