// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 

// creating a schema
const registerSchema = new mongoose.Schema({
    username: {
        type: String, 
        unique: true,
        required: true
    },
    email: {
        type: String, 
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});


// we are exporting information to another file to acccess database
module.exports = mongoose.model('Signup', registerSchema);