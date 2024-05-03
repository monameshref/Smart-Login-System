
var passBtn = document.getElementById("pass"); // button password
var passIcon = document.querySelector(".passIcon"); // icon password
var emailInput = document.getElementById("email"); // input email
var passInput = document.getElementById("password"); // input password
var loginBtn = document.getElementById("LogIn"); // Login button
var signUpAnchor = document.getElementById("signUpAnchor"); // signup Anchor


var users = [];

if (localStorage.getItem("users") != null ) {
    users = JSON.parse( localStorage.getItem("users") )
}

// open && close Password Icon
passBtn.addEventListener( "click" , function(){

    if ( passInput.type === "password") {
        passInput.type = "text"
        passIcon.classList.remove("fa-lock")
        passIcon.classList.add("fa-lock-open")
    }

    else {
        passInput.type = "password";
        passIcon.classList.add("fa-lock")
        passIcon.classList.remove("fa-lock-open")
    }
})




function logIn() {
    var email = emailInput.value;
    var password = passInput.value;

    if (emailInput.value === "" || passInput.value === "") {
        Swal.fire({
            text: "Please fill in all fields"
        });
        return;
    }

    if ( checkEmailAndPassword( email , password )) {
        window.location.href = "home.html";
    }

    else {
        Swal.fire({
            text: "Incorrect email or password"
        });
    }
}

loginBtn.addEventListener( "click" , function() {
    logIn();
});

function checkEmailAndPassword (email , password) {
    for ( var i = 0 ; i < users.length ; i++) {

        if ( users[i].email === email && users[i].password === password ) {
            localStorage.setItem("userName" , users[i].name );
            return true;
        }

        return false;
    }
}

signUpAnchor.addEventListener( "click" , function () {
    window.location.href = "./signup.html";
})