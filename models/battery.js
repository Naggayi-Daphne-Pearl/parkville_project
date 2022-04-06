// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const batterySchema = mongoose.Schema({
    username: {
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
    datetime: {
        type: String, 
        required: true
    }, 
    battery: {
        type: String, 
        required: true
    }
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Battery', batterySchema);