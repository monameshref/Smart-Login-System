
var nameInput = document.getElementById("name"); //Name Input
var emailInput = document.getElementById("email"); //Email Input
var passInput = document.getElementById("password"); //Password Input
var signupBtn = document.getElementById("signUp"); //signup Button
var passBtn = document.getElementById("pass"); //password Button
var passIcon = document.querySelector(".passIcon"); //password Icon
var signinAnchour = document.getElementById("signin"); //signin Anchour
var alert = document.querySelector(".alert"); //Alert

// console.log(nameInput , emailInput , passInput , signupBtn ,  passBtn , passIcon );


var users = [];

if (localStorage.getItem("users") != null) {
    users = JSON.parse(localStorage.getItem("users"));
}



// Open && Close Password Button
function password() {
    if( passInput.type === "password") {
        passInput.type = "text";
        passIcon.classList.remove("fa-lock");
        passIcon.classList.add("fa-lock-open");
    }

    else {
        passInput.type = "password";
        passIcon.classList.add("fa-lock");
        passIcon.classList.remove("fa-lock-open");
    }
}

passBtn.addEventListener("click" , function() {
    password();
});


function signUp() {

    if ( nameInput.value === "" || emailInput.value === "" || passInput.value === "") {
        Swal.fire({
            text: "Please fill in all fields"
        });
        return;
    }

    var user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passInput.value
    }

    if ( validEmail() === true && newEmail() === true ) {
        users.push(user);
        localStorage.setItem("users" , JSON.stringify(users));
        clearData();
        emailInput.classList.remove("is-valid");
        alert.classList.remove("d-none");
    }

    else {
        Swal.fire({
            text: "Invalid email or email already in use"
        });
    }
}

signupBtn.addEventListener("click" , function(){
    signUp();
})

// validation Email
function validEmail() {
    var text = emailInput.value;
    var regexEmail =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if( regexEmail.test(text) == true ) {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid");
        return true;
    }
    else {
        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        return false;
    }
}

emailInput.addEventListener("input" , function(){
    validEmail();
})

// New Email
function newEmail() {
    var email = emailInput.value;
    for ( var i = 0; i < users.length; i++) {
        if ( users[i].email === email ){
            return false;
        }
    }
    return true;
}

// clearData
function clearData() {
    nameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
}


signinAnchour.addEventListener( "click", function(){
    window.location.href = "./index.html";
});