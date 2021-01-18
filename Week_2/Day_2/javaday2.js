// OBJECTS : access the element by the property
let user = {
	username : "John",
	password : 1234,
	email : "john@gmail.com",
	logIn : true,
	countries : ["israel", "usa"],
	friends : {
		name : ["David", "Sarah"]
	}
}
console.log(user)
// 1. display the friends nested object
// 2. display the list of names of his friends
// 3. display the name of best friend : David

console.log(user["friends"]["name"]);
console.log(user["friends"]["name"][0]);


//Conditionals Exercise 1

let age=prompt("What is your age ?");
if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off")
} else if (age ==18) {
 alert("Congratulations on your first year of driving. Enjoy the ride!")
} else if (age > 18) {
    alert( "Powering On. Enjoy the ride!")
}
