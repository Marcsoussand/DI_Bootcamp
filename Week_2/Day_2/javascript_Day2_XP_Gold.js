//Exercise 1 : The World Translator

let language = prompt("Which language do you speak ?");
switch (language) {
case French:
	console.log("Bonjour");
	break;
case English:
	console.log("Hello");
	break;
case Hebrew:
	console.log("Shalom");
	break;
default:
	console.log("01110011 01101111 01110010 01110010 01111001");
}

// Exercise 2 : The Grade Assigner
let grade = prompt("What is your grade ?");
if (grade >90) {
	console.log("A");
} else if (grade >80) {
	console.log("B");
} else if (grade >=70) {
	console.log("C");
} else {
	console.log("D");
}


// Exercise 3 : Verbing

let verb = "drink";
let test3 = verb.length;
let testing = verb.substring(test3-3);
console.log(testing);
if (test3 >= 3 && testing == "ing") {
		console.log(verb +"ly");
	} else if (test3>=3){
		console.log(verb+"ing");
	}
	else {
		console.log(verb);
	}