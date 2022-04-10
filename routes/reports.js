// route will specify a path on your web browser
const express = require('express')
const router = express.Router(); 

//create an object that will create instances of sigdatetimeg up  
const Battery = require('../models/battery'); 
const Tyre = require('../models/tyremodels'); 

// validating code from database
const expressValidator = require('express-validator'); 

// router to validate our data 
router.use(expressValidator());

router.get('/reports', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all .....
        const data = await Battery.find({}).sort({$natural:-1});
       
        //  //The sum aggregate
        //  let totalTyre = await Tyre.aggregate([
        //   {$group:{_id:'$all', totalTyre:{ $sum:'$amount'}}}
        //   // {$group:{_id:'$all', totalValves:{ $sum:'$valves'}}}
          
        // ]);

        res.render('reports', {
          batteries : data, 
        //   total : totalParking[0],
          // total : totalValves[0]
        })
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

router.get('/reports', async(req,res)=>{
  // to pick data from the 
  try {
      // helps return all .....
      const data = await Tyre.find({}).sort({$natural:-1});
      res.render('reports', {
        tyres : data, 
      })
    } catch(error) {
      return res.status(400).send(
        { 
          status: 400,
          message: 'Oops failed to fetch all registrations',
          error
        });
  }
});



// gives access to someone to access our router
module.exports = router; 