// model File 
// will retrive our data 

const mongoose = require ('mongoose'); 
const bcrypt = require('bcryptjs');

// creating a schema
const registerSchema = mongoose.Schema({
    username: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
});

// encrpyt password
registerSchema.pre('save', async function() {
  // generating salt
  const salt = await bcrypt.genSalt(10); 
  // hash password 
  this.password = await bcrypt.hash(this.password, salt);
});

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Signup', registerSchema);