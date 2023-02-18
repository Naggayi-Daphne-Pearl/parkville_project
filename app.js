//express is used to design and build web applications easily and quicky
const express = require('express'); 
// mongoose allows to create and manage data in the MongoDb
const mongoose = require ('mongoose'); 
// body parser process data through the HTTP req.body
const bodyParser = require('body-parser'); 
// path provides a lot of very useful functionality to access and interact with the file system. 
const path = require ('path');
// passport autheenicates the user 
const passport = require ('passport'); 

// Express-session middleware to help us save the session cookie by storing data on the server. 
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
}); 

// creating a real controller which will manage the instances
//this will inherit express functions
const app = express(); 

// connects to the database
// you dont need the extension 
const config = require ('./config/database'); 
// we are creating a variable, that will be our route into our controller
const register = require('./routes/signup');
const login = require('./routes/login'); 
const home = require('./routes/home');
const logout = require('./routes/home'); 
const parking = require('./routes/parking');
const battery = require('./routes/batteryroute'); 
const tyre = require('./routes/tyreroute'); 
const reports = require('./routes/reports');

// inheriting a connection from mongoose
mongoose.connect(config.database);

// database instance for mongoose
const db = mongoose.connection; 

// this means once you open succcessfully, print connected successfully
db.once('open', () => {
    console.log('connected successfully');
})

//once it opens and there is an error show error. err is a keyword
db.on('error', (err) => {
    console.log(err);
})

// setting the view engine. this will help view our pug on the browser
app.engine('pug', require('pug').__express); 
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname,'views'))

// setting a directory for static files css bootstrap so that we dont have always specify the path
app.use(express.static(path.join(__dirname, 'public')));

//password configuration. requiring passport file
require('./config/passport')(passport);

// bodyparser
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(expressSession);

// initializing passport with its session authentication middleware
app.use(passport.initialize());
app.use(passport.session()); 

// // Passport configuration.
// passport.use(Users.createStrategy());
// passport.serializeUser(Users.serializeUser());
// passport.deserializeUser(Users.deserializeUser());

// connecting our app declared in routes
app.use('/', register); 
app.use('/', login); 
app.use('/', home);
app.use('/', logout); 
app.use('/', parking); 
app.use('/', battery); 
app.use('/', tyre); 
app.use('/', reports)

//Error non existent path.
app.get('*', (req, res) => {
    res.send('404 Oops, it looks like the page doesnt exist');
  });

  
// creating a port for the information to pass from the front end to the backend 
app.listen (4000, () => {
    console.log('listening at port 4000');
})



                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    