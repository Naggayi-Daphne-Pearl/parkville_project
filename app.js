const express = require('express'); 
const mongoose = require ('mongoose'); 
const bodyParser = require('body-parser')
const path = require ('path')
const Users = require('./models/loginmodel'); 
//const passportLocalMongoose = require('passport-local-mongoose'); 
//const expressValidator = require ('express-validator');
//const flash = require ('connect-flash')
//const passport = require ('passport')
//const passportLocal = require('passport-local'); 
//const expressSession = require ('express-session'); 

// creating a real controller which will manage the instances
//this will inherit express functions
const app = express(); 

// connects to the database
// you dont need the extension 
const config = require ('./config/database'); 
// declaring database variable
const database = require('./config/database'); 

// database instance for mongoose
const db = mongoose.connection; 
// inheriting a connection from mongoose
mongoose.connect(config.database)

// we are creating a variable, that will be our route into our controller
const register = require('./routes/signup');
const login = require('./routes/login'); 
const home = require('./routes/home');
const logout = require('./routes/home'); 
const parking = require('./routes/parking'); 

// Express-session middleware to help us save the session cookie.
const expressSession = require('express-session')({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
  });
  const passport = require('passport');

// this means once you open succcessfully, print connected successfully
db.once('open', () => {
    console.log('connected successfully');
})

// once it opens and there is an error show error. err is a keyword
db.on('error', (err) => {
    console.log(err);
})

// setting the view engine. this will help view our pug on the browser
app.engine('pug', require('pug').__express); 
app.set('view engine', 'pug'); 
app.set('views', path.join(__dirname,'views'))

// body parser middle-ware section. focuses on the fields have been required
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());
app.use(expressSession);

// initializing passport with its session authentication middleware
app.use(passport.initialize());
app.use(passport.session()); 

// Passport configuration.
passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

// setting a directory for static files css bootstrap so that we dont have always specify the path
app.use(express.static(path.join(__dirname, 'public')));

// connecting our app declared in routes
app.use('/', register); 
app.use('/', login); 
app.use('/', home);
app.use('/', logout); 
app.use('/', parking); 

//Error non existent path.
app.get('*', (req, res) => {
    res.send('404 Oops, it looks like the page doesnt exist');
  });

  
// creating a port for the information to pass from the front end to the backend 
app.listen (4000, () => {
    console.log('listening at port 4000');
})