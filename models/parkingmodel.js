// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const parkingSchema = mongoose.Schema({
    nameofclient: {
        type: String, 
        required: [true, 'must provided']
    },
    phonenumber: {
        type: Number, 
        required: true
    },
    numberplate: {
        type: String, 
        required: true
    }, 
    typeofcar: {
        type: String, 
        required: true
    }, 
    nin: {
        type: String, 
        required: true
    },
    date: {
        type: String, 
        required: true
    },
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Parking', parkingSchema);