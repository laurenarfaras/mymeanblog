// configuration of passport node module
const passport = require("passport"); // module not file
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model.js");

passport.use(new LocalStrategy(), function howWeAuth(username, password, done){});
