// route will specify a path on your web browser

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');


 
// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

// Router is an instance of an object . is an object
// we are getting information from path /signUp
router.get('/home', (req,res) => {
    // we are asking the server to give us information from signUp pug 
    res.render('home')
});


// Logout form
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

// gives access to someone to access our router
module.exports = router; 