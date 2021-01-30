let social=document.getElementById("navBar");
social.setAttribute('id',"socialNetworkNavigation");
console.log(social.getAttribute('id'));

let li = document.createElement('li');
let liText = document.createTextNode("logout");
li.appendChild(liText);
social.appendChild(li);