const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.use("/", require("./api/routes"));

// Expose app 
module.exports = app; 