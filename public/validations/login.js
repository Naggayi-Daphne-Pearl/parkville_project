// accessing the dom by form name and element
const userName = document.login.username;
const password = document.login.password;

//displaying errors picked from id of error element in form
const userNameError = document.getElementById('userName');
const passwordError= document.getElementById('pwd');



//event listners got from declared constants
userName.addEventListener('blur', userNameVerify, true);
password.addEventListener('blur', passwordVerify, true);

//validations
function Validate(){
    //first name validation, checking if its empty
    if(userName.value ===''){
        userNameError.textContent = 'first name is required';
        userName.border = '1px solid red';
        userName.focus();
        return false;
    }
    //password validation
    if(password.value ===''){
        passwordError.textContent = 'Password is required';
        password.border = '1px solid red';
        password.focus();
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



//event handlers for correct data

//first name
 function userNameVerify(){
     if(userName.value !='' && userName.value.match(nameRegex)){
         userName.style.border ='1px solid green';
         userNameError.innerHTML = '';
         return true;
     }
     else{
         userName.style.border = '1px solid red';
         userNameError.textContent = 'first name should be between 1-20 characters'
        userName.focus();
        return false;
        }
 }

//password
function passwordVerify(){
    if(password.value !='' && password.value.match(passwordRegex)){
        password.style.border ='1px solid green';
        passwordError.innerHTML = '';
        return true;
    }
    else{
        password.style.border = '1px solid red';
        passwordError.textContent = 'Minimum eight characters, at least one letter and one number'
        password.focus();
       return false;
       }
}
