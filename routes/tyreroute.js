// route will specify a path on your web browser
const express = require('express')
const router = express.Router(); 

//create an object that will create instances of sigdatetimeg up  
const Tyre = require('../models/tyremodels'); 
// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

// Router is an instance of an object . is an object
// we are getting information from path /tyre
router.get('/tyre', (req,res) => {
    // we are asking the server to give us information from tyre pug 
    res.render('tyre')
});

// posting data from the form of the tyre method in tyre.pug
router.post('/tyre', (req,res) =>{
    // creating a variable that picks the body of the field like username
    const username = req.body.username; 
    const phonenumber = req.body.phonenumber;
    const numberplate = req.body.numberplate; 
    const size = req.body.size; 
    const tyremake = req.body.tyremake;  

    let error = req.validationErrors();
    if(error){
        res.render('tyre');
    }
    // registering new users to the database
    else {
        let newEntry = new Tyre({
            username: username, 
            phonenumber:phonenumber, 
            size:size,
            numberplate: numberplate, 
            tyremake: tyremake
        });

        // saving the new tyre entry
        newEntry.save((err)=>{
            if(err){
                console.error(err)
                return;
            } 
            else {
                console.log('new tyre client registered');
                res.redirect('/home');
            }
        })
    }
})


// // Delete post
// router.delete('/tyre', function(req, res){
//     let query = {_id: req.params.id};
  
//     Article.remove(query, function(err){
//       if(err) {
//         console.error(err);
//         return;
//       } else {
//         req.flash('success', 'Article Deleted')
//         res.send('Success');
//       }
//     });
//   });

// // updating a route
// router.get('/tyre', asyn(req,res) => {
//     try {
//         const tyreData = await 
//     } catch (error) {
        
//     }
// })

// gives access to someone to access our router
module.exports = router; 