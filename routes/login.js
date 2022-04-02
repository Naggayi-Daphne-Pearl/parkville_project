// route will specify a path on your web browser
const express = require('express'); 
const passport = require('passport');
const router = express.Router(); 
const roles = require('../roles')

//create an object that will create instances of signing up  
const Login = require('../models/loginmodel'); 

// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

// Router is an instance of an object . is an object
// we are getting information from path /signUp
router.get('/login', (req,res) => {
    // we are asking the server to give us information from signUp pug 
    res.render('login')
});

// posting data from the form of the signup method in signup.pug
router.post('/login', passport.authenticate('local', { faliureRedirect: '/login'}), (req,res) => {
    console.log('This is log in data', req.body);
    req.session.user = req.user; 

    // 
    const userRole = roles[req.user.role]
    if (userRole == 'manager') {
        res.redirect('/home');    
    }
    // res.redirect('/home');
}); 

    
// gives access to someone to access our router
module.exports = router; 