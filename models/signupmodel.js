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

// // hashing passwords using mongoose middle ware
// // encrpyt password
// registerSchema.pre('save', async function() {
//   // generating salt
//   const salt = await bcrypt.genSalt(10); 
//   // hash password 
//   this.password = await bcrypt.hash(this.password, salt);
// });

// we are exporting information to another file to acccess database
module.exports = mongoose.model('Signup', registerSchema);