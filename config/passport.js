//This handles authentication
const LocalStrategy = require('passport-local').Strategy;
const Signup = require('../models/signupmodel');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = (passport) =>{
    // Local strategy
    passport.use(new LocalStrategy(function(email, password, done){
      // match username
      let query = { email: email };
      Signup.findOne(query, function(err, user){
        if(err) throw err;
  
        if(!user) {
          return done(null, false, { message: 'No user found' });
        }
  // Match password
  bcrypt.compare(password, user.password, function(err, isMatch){
    if (err) throw err;
    if(isMatch) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Wrong password' });
    }
  });
})
})); 

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Signup.findById(id, function(err, user) {
      done(err, user);
    });
  });
};


