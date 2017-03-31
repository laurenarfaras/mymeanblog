// configuration of passport node module
const passport = require("passport"); // module not file
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user.model.js");

passport.use(new LocalStrategy({ usernameField: "email"},
        function howWeAuth(username, password, done){
          User.findOne({ email: username }, function(err, user){
            if (err) {
              return done(err);
            }
            if (!user) {  // if there is not a user with the email
              return done(null, false, {
                msg: "user not found"
              });
            }
            if (!user.validPassword(password)){
              return done(null, false, {
                msg: "authentication failed"
              });
            }
            return done(null, user);
          });
        }));
