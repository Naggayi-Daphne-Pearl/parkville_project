// this creates a database 
module.exports = {
    database: 'mongodb://localhost:27017/daphne', 
    secret: 'pearl'
}






// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Naggayi:<password>@cluster0.pjvrd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });