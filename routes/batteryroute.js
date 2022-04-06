// route will specify a path on your web browser
const express = require('express')
const router = express.Router(); 

//create an object that will create instances of sigdatetimeg up  
const Battery = require('../models/battery'); 
// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

// Router is an instance of an object . is an object
// we are getting information from path /battery
router.get('/battery', (req,res) => {
    // we are asking the server to give us information from battery pug 
    res.render('batteries')
});

// posting data from the form of the battery method in battery.pug
router.post('/battery', (req,res) =>{
    // creating a variable that picks the body of the field like username
    const username = req.body.username; 
    const phonenumber = req.body.phonenumber;
    const numberplate = req.body.numberplate;  
    const datetime = req.body.datetime; 
    const battery = req.body.battery; 
    
    
    let error = req.validationErrors();
    if(error){
        res.render('battery');
    }
    // registering new users to the database
    else {
        let newEntry = new Battery({
            username: username, 
            phonenumber:phonenumber, 
            datetime:datetime,
            numberplate: numberplate, 
            battery: battery
        });

        // saving the new battery entry
        newEntry.save((err)=>{
            if(err){
                console.error(err)
                return;
            } 
            else {
                console.log('new battery client registered');
                res.redirect('/home');
            }
        })
    }
})


// // Delete post
// router.delete('/battery', function(req, res){
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
// router.get('/battery', asyn(req,res)=>{
//     try {
//         const batteryData = await 
//     } catch (error) {
        
//     }
// })

// gives access to someone to access our router
module.exports = router; 