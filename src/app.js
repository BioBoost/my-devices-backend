const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
const config = require("./config/config");

const passport = require('passport');
const initializePassport = require('./helpers/authentication');
const session = require('express-session');

app.use(bodyParser.json());

// Cross-Origin Resource Sharing
const origin = `${config.frontend.protocol}://${config.frontend.domain}`
                + ((config.frontend.port != 80 && config.frontend.port != 443) ?
                  `:${config.frontend.port}` : '');
console.log(`Origin: ${origin}`);

app.use(cors({
  credentials: true,
  origin: origin
}));

app.use(session({
  secret: config.authentication.secret,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 * 14}
}));

app.use(passport.initialize());
app.use(passport.session());    // Use across entire user session
initializePassport(passport);

app.use("/", require("./api/routes"));

// Expose app 
module.exports = app; 