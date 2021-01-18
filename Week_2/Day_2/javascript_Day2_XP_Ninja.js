// Exercise 1 : Age Difference

let age1 = +prompt("What is your birthday year (YYYY) ?");
let age2 = +prompt("What is the second birthday year (YYYY) ?");
if (age1 > age2) {
	let diff = age1-age2;
	console.log(age1+diff);
} else {
	let diff = age2-age1;
	console.log(age2+diff);
}

// Exercise 2 : Zip Codes

let zip = prompt("Please give me your Zip Code :");
let digit = zip.length;
console.log(digit)
let nondigit = /\D/g;
let testdigit = nondigit.test(zip);
console.log(testdigit);
let space = /\s/g;
let testspace = space.test(zip);
console.log(testspace);

if (digit ==5 && testdigit == false && testspace == false) {
	console.log("good");
} else {
	console.log("error");
}

// Exercise 3 : Secret Word

let secret = prompt("Please give me a word :");

