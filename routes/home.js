// route will specify a path on your web browser

const express = require('express'); 
const router = express.Router(); 
 
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

// Logout, call back checking if there is a session
router.post('/logout', (req, res) => {
    if (req.session) {
      req.session.destroy((err) => {
        if (err) {
          // failed to destroy session
        } else {
          return res.redirect('/home');
        }
      });
    }
  });
// gives access to someone to access our router
module.exports = router; 