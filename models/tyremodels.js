// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const tyreSchema = mongoose.Schema({
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
    size: {
        type: String, 
        required: true
    }, 
    tyremake: {
        type: String, 
        required: true
    }
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Tyre', tyreSchema);