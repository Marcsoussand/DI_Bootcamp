//Exercise 1

let x = 5;
let y = 3;
if (x>y) {
	console.log("x is the biggest number")
};

// Exercise 2

let newDog = "Chihuahua";
let taille = newDog.length;
console.log(taille);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua") {
	console.log("I love Chihuahua, it’s my favorite dog breed");
} else {
	console.log("I don't care, I prefer cats");
}

// Exercise 3

let number3 = prompt("Please give me a number : ");
let ratio = number3%2;
if (ratio == 0) {
	console.log(number3 + " is an even number");
} else {
	console.log(number3 + " is not an even number");
}

// Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let lg=users.length-2;
if (users.length == 0) {
	console.log("No one is online");
} else if (users.length == 1) {
	console.log(users[0] + " is online");
} else if (users.length == 2) {
	console.log(users[0] + " and " + users[1]+ " are online.")
} else {
	console.log(users[0] + ", " +users[1]+" and "+lg+ " more are online");
}

