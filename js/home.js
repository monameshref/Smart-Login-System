
var paragraph = document.getElementById("name");
var logOut = document.getElementById("logOut");

var userName = localStorage.getItem("userName")

paragraph.innerHTML =  userName;



logOut.addEventListener("click" , function(){
    window.location.href = "./index.html";
})