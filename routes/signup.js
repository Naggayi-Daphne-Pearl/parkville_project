// route will specify a path on your web browser
const express = require('express'); 
const flash = require('connect-flash')
const bcrypt = require('bcryptjs');
const router = express.Router(); 

//create an object that will create instances of signing up  
const Signup = require('../models/signupmodel'); 
// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

// Router is an instance of an object . is an object
// we are getting information from path /signUp
router.get('/signup', (req,res) => {
    // we are asking the server to give us information from signUp pug 
    res.render('signup')
});

// posting data from the form of the signup method in signup.pug
router.post('/signup', (req,res) =>{
    // creating a variable that picks the body of the field like username
    const username = req.body.username; 
    const email = req.body.email;
    const password = req.body.password; 
    const confirmpassword = req.body.confirmpassword; 
    
    // 
    let error = req.validationErrors();
    if(error){
        res.render('signup');
    }
    // registering new users to the database
    else {
        let newUser = new Signup({
            username: username, 
            email:email,
            password: password, 
            confirmpassword: confirmpassword
        });

        //encrypting the password using bcrypt
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) {
                    console.error(err)
                    return;
                }else{
                    newUser.password = hash;
                    // saving our model to
                    newUser.save((err) => {
                        if(err){
                            console.error(err);
                        return;
                        }
                        else {
                        //we fisrt flash a message confirm the saving of a record
                        //we stay @ the same form to register a new entity
                        console.log('we have saved your data in the database')
                        res.redirect('/login')
                        }
                    })
                }
            })
        })
    }
})




// gives access to someone to access our router
module.exports = router;