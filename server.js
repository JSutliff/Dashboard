const express = require("express");
var passport = require('passport');
const session = require("express-session");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// passport config
app.use(session({ secret: (process.env.secret || 'farley the cat'),resave: true, saveUninitialized:true, cookie: { secure: false }})); // session secret
app.use(passport.initialize());
app.use(passport.session());
var User = require('./models/User');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
 mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dashboard");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
