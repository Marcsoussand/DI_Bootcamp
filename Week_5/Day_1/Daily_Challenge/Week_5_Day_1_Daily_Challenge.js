let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let send = document.getElementById("send");



send.addEventListener("click", function () {
   var fullName = {name:firstName.value,lastname:lastName.value};
   alert(JSON.stringify(fullName));  
})



