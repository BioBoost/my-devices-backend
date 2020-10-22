const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');

app.use(bodyParser.json());

// Cross-Origin Resource Sharing
app.use(cors());    // Allow-all

app.use("/", require("./api/routes"));

// Expose app 
module.exports = app; 