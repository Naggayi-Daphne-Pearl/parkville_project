const express = require('express');
const router = express.Router();
const Parking = require('../models/parking');



router.get('/parking', async(req,res)=>{
    // to pick data from the 
    try {
        // helps return all the members in the collection clients
        const data = await Parking.find({}).sort({$natural:-1});
        // console.log('All batteries hired',data);
        // let totalPayprice = await Client.aggregate({totalPayprice:{$sum: '$paidprice'}})
        // gives us the file dash and come with the client data or client has same info with data
        res.render('batteryReport', {parkings : data})
      } catch(error) {
        return res.status(400).send(
          { 
            status: 400,
            message: 'Oops failed to fetch all registrations',
            error
          });
    }
});

module.exports = router;