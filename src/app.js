const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    message: `Welcome to the API of My-Devices`,
  });
});

// Expose app 
module.exports = app; 