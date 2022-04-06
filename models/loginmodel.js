// // model File 
// // will retrive our data 

// const mongoose = require ('mongoose'); 

// const passportLocalMongoose = require('passport-local-mongoose'); 

// // creating a schema
// const userSchema = mongoose.Schema({
//     username: {
//         type: String, 
//         required: true
//     },
//     password: {
//         type: String, 
//         required: true
//     }
// });

// // Setting the plugin to use passport
// userSchema.plugin(passportLocalMongoose);

// //Associating the schema with actual collection name
// module.exports = mongoose.model('Login', userSchema);
