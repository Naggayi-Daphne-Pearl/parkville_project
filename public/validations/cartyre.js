// accessing the dom by form name and element
const userName = document.tyre.username;
const phoneNumber = document.tyre.phonenumber; 
const numberPlate = document.tyre.numberPlate; 
//const typeOfCar = document.tyre.typeOfCar; 
const dateTime = document.tyre.datetime
const tyreMake = document.tyre.tyremake; 

//displaying errors picked from id of error element in form
const userNameError = document.getElementById('userName'); 
const phoneNumberError = document.getElementById('phoneNumber'); 
const numberPlateError = document.getElementById('numberPlate');
const dateTimeError = document.getElementById('dateTime');
//const typeOfCarError = document.getElementById('typeOfCar');
const tyreMakeError = document.getElementById('tyreMake');  


//event listners got from declared constant
userName.addEventListener('blur', userNameVerify,true); 
phoneNumber.addEventListener('blur', phoneNumberVerify, true); 
numberPlate.addEventListener('blur', numberPlateVerify, true);
dateTime.addEventListener('blur', dateTimeVerify, true);
//typeOfCar.addEventListener('blur', typeOfCarVerify, true); 
tyreMake.addEventListener('blur', tyreMakeVerify, true); 

//validations
function clientValidate() {
    if (userName.value === '') {
        userNameError.textContent = 'Name of client is required';
        userName.style.border = '1px solid red';
        userName.textContent = ''
        userName.focus();
        return false;    
    }
    if (phoneNumber.value === '') {
        phoneNumberError.textContent = 'Phone Number is required'; 
        phoneNumber.style.border = '1px solid red'; 
        phoneNumber.focus(); 
        return false; 
        
    }
    if (numberPlate.value === '') {
        numberPlateError.textContent = 'Number plate is required'; 
        numberPlate.style.border = '1px solid red'; 
        numberPlate.focus(); 
        return false; 
        
    }
    if (dateTime.value === '') {
        dateTimeError.textContent = 'Please fill in Date and Time for the user'
    }
    // if (typeOfCar.value === '') {
    //     typeOfCarError.textContent = 'typeOfCar of car required'; 
    //     typeOfCar.style.border = '1px solid red'; 
    //     typeOfCar.focus(); 
    //     return false;    
    // }
    if (tyreMake.value === '') {
        tyreMakeError.textContent = 'typeOfCar of tyreMake required'; 
        tyreMake.style.border = '1px solid red'; 
        tyreMake.focus(); 
        return false;    
    }
    
    
}

//regex
const nameRegex = /^.{1,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'
const numberPlateRegex = "^[A-Z]{1,3}-[A-Z]{1,2}-[0-9]{1,4}$" ; 
const dateTimeRegex = "\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}"

// Client Name 
function userNameVerify() {
    if (userName.value != '' && userName.value.match(nameRegex)) {
        userName.style.border ='1px solid green';
        userNameError.innerHTML = '';
        return true;   
    }
    else{
        userName.style.border = '1px solid red';
        userNameError.textContent = 'Client name should be between 1-20 characters'
       userName.focus();
       return false;
       }
    
}

// phone Number
function phoneNumberVerify() {
    if (phoneNumber.value != '' && phoneNumber.value.match(phoneRegex)) {
     phoneNumber.style.border = '1px solid green'; 
     phoneNumberError.innerHTML= ''; 
     return true;
        
    } 
    else {
     phoneNumber.style.border = '1px solid red'; 
     phoneNumberError.textContent= 'A correct phone Number of 10 digits is required'; 
     return false;  
    }
       
 }

// Number Plate

function numberPlateVerify() {
    if (numberPlate.value != '' && numberPlate.value.match(numberPlateRegex)) {
     numberPlate.style.border = '1px solid green'; 
     numberPlateError.innerHTML= ''; 
     return true;
        
    } 
    else {
     numberPlate.style.border = '1px solid red'; 
     numberPlateError.textContent= 'A Correct Number Plate is required'; 
     return false;  
    }
       
 }

// date and time 
function dateTimeVerify() {
    if (dateTime.value != '' && dateTime.value.match(alphaNumeric)) {
        dateTime.style.border = '1px solid green'; 
        dateTimeError.innerHTML = ''; 
        return true
        
    } else {
        dateTime.style.border = '1px solid red'; 
        dateTimeError.textContent = 'Please fill the right date';
        return false; 
    }
    
}

// // typeOfCar of car
// function typeOfCarVerify() {
//     if (typeOfCar.value != '' && typeOfCar.value.match(alphaNumeric)) {
//      typeOfCar.style.border = '1px solid green'; 
//      typeOfCarError.innerHTML= ''; 
//      return true;
        
//     } 
//     else {
//      typeOfCar.style.border = '1px solid red'; 
//      typeOfCarError.textContent= 'typeOfCar of tyreMake is required'; 
//      return false;  
//     }
       
//  }

// typeOfCar of tyreMake
function tyreMakeVerify() {
    if (tyreMake.value != '' && tyreMake.value.match(alphaNumeric)) {
     tyreMake.style.border = '1px solid green'; 
     tyreMakeError.innerHTML= ''; 
     return true;
        
    } 
    else {
     tyreMake.style.border = '1px solid red'; 
     tyreMakeError.textContent= 'Tyre Make is required'; 
     return false;  
    }
       
 }