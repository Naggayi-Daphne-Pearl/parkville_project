// accessing the dom by form name and element
const userName = document.parking.username; 
const phoneNumber = document.parking.phonenumber; 
const nin = document.parking.nin; 
const numberPlate = document.parking.numberplate; 
const parkingSlot = document.parking.parkingslot; 
//const typeOfCar = document.parking.typeOfCar; 

//displaying errors picked from id of error element in form
const userNameError = document.getElementById('userName'); 
const phoneNumberError = document.getElementById('phoneNumber'); 
const ninError = document.getElementById('nin'); 
const numberPlateError = document.getElementById('numberPlate');
//const typeOfCarError = document.getElementById('typeOfCar'); 
const parkingSlotError = document.getElementById('parkingSlot')

//event listners got from declared constants
userName.addEventListener('blur', userNameVerify,true); 
phoneNumber.addEventListener('blur', phoneNumberVerify, true); 
nin.addEventListener('blur', ninVerify, true); 
numberPlate.addEventListener('blur', numberPlateVerify, true); 
//typeOfCar.addEventListener('blur', typeOfCarVerify, true); 
parkingSlot.addEventListener('blur', parkingSlotVerify, true);


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
    if (nin.value === '') {
        ninError.textContent = 'Identity card Number is required'; 
        nin.style.border = '1px solid red'; 
        nin.focus();
        return false;   
    }
    if (numberPlate.value === '') {
        numberPlateError.textContent = 'Number plate is required'; 
        numberPlate.style.border = '1px solid red'; 
        numberPlate.focus(); 
        return false; 
        
    }
    if (parkingSlot.value === '') {
        parkingSlotError.textContent = 'Fill in parking Slot'; 
        parkingSlot.style.border = '1px solid red'; 
        parkingSlot.focus(); 
        return false
        
    }
}


//regex
const nameRegex = /^.{1,20}[a-zA-Z]+$/; // for names lname & first & last btn (5-50)
const alphaNumeric = /^[0-9a-zA-Z]+$/; // for alpha numeric
const ninRegex = /^[0-9a-zA-Z]{13}$/; // for NIN exactly 13 alphanumric characters
const phoneRegex = /^\d{10}$/; // for phone number
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" // Minimum eight characters, at least one letter and one number:
const emailRegex = "^(.+)@(.+)$";//only cares about '@'
const numberPlateRegex = "^[A-Z]{1,3}-[A-Z]{1,2}-[0-9]{1,4}$"


//event handlers for correct data

// Client Name 
function userNameVerify() {
    if (userName.value != '' && userName.value.match(nameRegex)) {
        userName.style.border ='1px solid green';
        userNameError.innerHTML = '';
        return true;   
    }
    else{
        userName.style.border = '1px solid red';
        userNameError.textContent = 'Name should be 1-20 characters'
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
    phoneNumberError.textContent= 'Phone Number is not correct'; 
    return false;  
   }
      
}

// nin
function ninVerify() {
    if (nin.value != '' && nin.value.match(alphaNumeric)) {
     nin.style.border = '1px solid green'; 
     ninError.innerHTML= ''; 
     return true;
        
    } 
    else {
     nin.style.border = '1px solid red'; 
     ninError.textContent= 'Nin is incorrect'; 
     return false;  
    }
       
 }


 //Number Plate

 function numberPlateVerify() {
    if (numberPlate.value != '' && numberPlate.value.match(alphaNumeric)) {
     numberPlate.style.border = '1px solid green'; 
     numberPlateError.innerHTML= ''; 
     return true;
        
    } 
    else {
     numberPlate.style.border = '1px solid red'; 
     numberPlateError.textContent= 'Number Plate filled is incorrect'; 
     return false;  
    }
       
 }

// parking slot 
function parkingSlotVerify() {
    if (parkingSlot.value != '' && parkingSlot.value.match(alphaNumeric)) {
        parkingSlot.value.border = '1px solid green'; 
        parkingSlotError.innerHTML = ''; 
        return true
        
    } else {
       parkingSlot.style.border = '1px solid red'; 
       parkingSlotError.textContent = 'please fill in the parking slot number' 
    }
    
}