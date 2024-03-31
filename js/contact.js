let nameErr = document.getElementById("name-error")
let phoneErr = document.getElementById("phone-error")
let emailErr = document.getElementById("email-error")
let messageErr = document.getElementById("message-error")
let submitErr = document.getElementById("submit-error")

function validateName(){
    let name = document.getElementById("name").value;
    if(name.length == 0){
        nameErr.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameErr.innerHTML = "Write full name";
        return false;
    }
    nameErr.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #008000;"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById("phone").value;
    if(phone.length == 0){
        phoneErr.innerHTML = "Phone no. is required";
        return false;
    }
    if(phone.length !== 10){
        phoneErr.innerHTML = "Phone no. should be 10 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneErr.innerHTML = "Phone no. is required";
        return false;
    }
    phoneErr.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #008000;"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("email").value;
    if(email.length == 0){
        emailErr.innerHTML = "Email is required";
        return false;
    }
   
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailErr.innerHTML = "Email Invalid";
        return false;
    }
    emailErr.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #008000;"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById("message").value;
    let required = 30
    let left = required - message.length
    if(left > 0){
        messageErr.innerHTML = left + " more characters required";
        return false;
    }
    messageErr.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #008000;"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitErr.style.display = "block"
        submitErr.innerHTML = "Please fix error to submit"
        setTimeout(function(){submitErr.style.display = "none"}, 3000)
        return false
    }
}