// accessing the dom by form name and element
const userName = document.battery.username; 
const phoneNumber = document.battery.phonenumber; 
const numberPlate = document.battery.numberplate;
const dateTime = document.battery.datetime



//displaying errors picked from id of error element in form
const userNameError = document.getElementById('userName');
const phoneNumberError = document.getElementById('phoneNumber');  
const numberPlateError = document.getElementById('numberPlate');
const dateTimeError = document.getElementById('dateTime')



//event listners got from declared constant
userName.addEventListener('blur', userNameVerify,true); 
phoneNumber.addEventListener('blur', phoneNumberVerify, true); 
numberPlate.addEventListener('blur', numberPlateVerify, true); 
dateTime.addEventListener('blur', dateTimeVerify, true)



// validations
function clientValidate() {
    if (userName.value === '') {
        userNameError.textContent = 'first name is required';
        userName.style.border = '1px solid red';
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
    if (typeOfCar.value === '') {
        typeOfCarError.textContent = 'Type Of Car required'; 
        typeOfCar.style.border = '1px solid red'; 
        typeOfCar.focus(); 
        return false;    
    }
    if (batteryMake.value === '') {
        batteryMakeError.textContent = 'battery Make required'; 
        batteryMake.style.border = '1px solid red'; 
        batteryMake.focus(); 
        return false;    
    }
    if (dateTime.value === '') {
        dateTimeError.textContent = 'date required'; 
        dateTime.style.border = '1px solid red'; 
        dateTime.focus(); 
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
     phoneNumberError.textContent= 'Phone Number is not required'; 
     return false;  
    }
       
 }

// Number Plate

function numberPlateVerify() {
    if (numberPlate.value != '' && numberPlate.value.match(alphaNumeric)) {
     numberPlate.style.border = '1px solid green'; 
     numberPlateError.innerHTML= ''; 
     return true;
        
    } 
    else {
     numberPlate.style.border = '1px solid red'; 
     numberPlateError.textContent= 'Number Plate is not correct'; 
     return false;  
    }
       
 }

// date and time 
function numberPlateVerify() {
    if (dateTime.value != '' && dateTime.value.match(alphaNumeric)) {
     dateTime.style.border = '1px solid green'; 
     dateTimeError.innerHTML= ''; 
     return true;
        
    } 
    else {
     dateTime.style.border = '1px solid red'; 
     numberPlateError.textContent= 'date  is required'; 
     return false;  
    }
       
 }
