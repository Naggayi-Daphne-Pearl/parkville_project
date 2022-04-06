// accessing the dom by form name and element
const userName = document.signup.username;
const email = document.signup.email;
const password = document.signup.password;
const confirmPassword = document.signup.password2;

//displaying errors picked from id of error element in form
const userNameError = document.getElementById('uName');
const emailError = document.getElementById('eMail');
const PasswordError= document.getElementById('pwd1');
const confirmPasswordError = document.getElementById('pwd2')


//event listners got from declared constants
userName.addEventListener('blur', userNameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
confirmPassword.addEventListener('blur', confirmPasswordVerify,true); 


//validations
function Validate(){
    //first name validation, checking if its empty
    if(userName.value ===''){
        userNameError.textContent = 'User Name is required';
        userName.style.border = '1px solid red';
        userName.focus();
        return false;
    }
    // email validation
    if(email.value ===''){
        emailError.textContent = 'Email is required'; 
        email.style.border = '1px solid red';
        email.focus();
        return false;
    }
    //password validation
    if(password.value ===''){
        password_error.textContent = 'Password is required';
        password.style.border = '1px solid red';
        password.focus();
        return false;
    }
    if (confirmPassword.value == '') {
        confirmPasswordError.textContent = 'Password is required';
        confirmPassword.style.border = '1px solid red';
        confirmPassword.focus();
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
      
 }

//email
 function emailVerify(){
    if(email.value !='' && email.value.match(emailRegex)){
        email.style.border ='1px solid green';
        emailError.innerHTML = '';
        return true;
    }
    else{
        email.style.border = '1px solid red';
        emailError.textContent = 'email shoud have "@"'
        email.focus();
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

//confirm password
function confirmPasswordVerify(){
    if(confirmPassword.value !='' && confirmPassword.value.match(passwordRegex)){
        confirmPassword.style.border ='1px solid green';
        confirmPasswordError.innerHTML = '';
        return true;
    }
    else{
        confirmPassword.style.border = '1px solid red';
        confirmPasswordError.textContent = 'Minimum eight characters, at least one letter and one number'
        confirmPassword.focus();
       return false;
       }
}



