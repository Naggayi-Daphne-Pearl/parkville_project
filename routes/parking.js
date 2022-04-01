// route will specify a path on your web browser
const express = require('express')
const router = express.Router(); 

//create an object that will create instances of signing up  
const Parking = require('../models/parkingmodel'); 
// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

// Router is an instance of an object . is an object
// we are getting information from path /parking
router.get('/parking', (req,res) => {
    // we are asking the server to give us information from parking pug 
    res.render('parking')
});

// posting data from the form of the parking method in parking.pug
router.post('/parking', (req,res) =>{
    // creating a variable that picks the body of the field like nameofclient
    const nameofclient = req.body.nameofclient; 
    const phonenumber = req.body.phonenumber;
    const numberplate = req.body.numberplate; 
    const typeofcar = req.body.typeofcar; 
    const nin = req.body.nin; 
    const date = req.body.date; 
    const gender = req.body.gender; 
    
    // // validating 
    // // notEmpty is a function that makes sure the fields are entered. equivalent to required in html. 
    // req.checkBody('nameofclient', 'enter user name').notEmpty();
    // req.checkBody('phonenumber', 'enter correct phonenumbe').notEmpty;
    // req.checkBody('numberplate', 'enter password').notEmpty();
    // req.checkBody('confirmpassword', 'confirm password').notEmpty; 
    
    let error = req.validationErrors();
    if(error){
        res.render('parking');
    }
    // registering new users to the database
    else {
        let newEntry = new Parking({
            nameofclient: nameofclient, 
            phonenumber:phonenumber, 
            numberplate: numberplate,
            typeofcar: typeofcar,
            nin:nin, 
            date: date, 
            gender: gender
        });

        // saving the new parking entry
        newEntry.save((err)=>{
            if(err){
                console.error(err)
                return;
            } 
            else {
                console.log('new parking slot registered');
                res.redirect('/home');
            }
        })
    }
})




// gives access to someone to access our router
module.exports = router; 