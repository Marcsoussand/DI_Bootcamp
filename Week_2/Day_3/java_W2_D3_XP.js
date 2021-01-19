// Exercise 1 : Your Favorite Colors

let colors = ["blue","green","orange","fluorescent yellow","white"];
let suffix = ["st","nd","rd","th"];
// Solution for question 2
for (i=0;i<colors.length;i++) {
	console.log("My #"+(i+1)+" choice is "+colors[i])
}
// Solution for question 3 bonus

for (i=0;i<colors.length;i++) {
	if (colors.length <=4){
	console.log("My "+(i+1)+suffix[i]+" choice is "+colors[i])
	} else {
		console.log("My "+(i+1)+suffix[3]+" choice is "+colors[i])
	}

}

// Exercise 2

let people = ["Greg", "Mary", "Devon", "James"]
// 1. Using a loop, iterate through this array and console.log all of the people.
for (i=0;i<=people.length-1;i++) {
	console.log(people[i]);
}
//2. Write the command to remove “Greg” from the array.
people.shift();
console.log(people);
//3. Write the command to replace “James” by “Jason” in the array.
people.splice(2,1,"Jason");
console.log(people);
//4. Write the command to add your name to the end of the array.
people.push("Marc");
console.log(people);
//5. Using a loop, iterate through this array and after console.log-ing “Jason”, exit from the loop.
for (i=0;i<=2;i++) {
	console.log(people[i]);
}
//6. Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or your name.
//I did this with indexof, in case of changing array, but with the following questions, it was just a waste of time :)
let mary = people.indexOf("Mary");
let marc = people.indexOf("Marc");
console.log(mary);
console.log(marc)
let copy= people.slice(0,mary)+people.slice(mary+1,marc)+people.slice(marc+1,people.length-1);
console.log(copy);
//7. Write the command that gives the indexOf where “Mary” is located.
let maryposition = people.indexOf("Mary");
console.log(maryposition);
//8. Write the command that gives the indexOf where “Foo” is located (this should return -1).
let foo = people.indexOf("Foo");
console.log(foo);
//9.Write a variable called last which value is the last element of the array.
let last = people[people.length-1];
console.log(last);

//Exercise 3 : Repeat the question

let numb = prompt("Please give me a number :");
console.log(numb);
while (numb<10) {
	numb = prompt("Please give me another number :");
	console.log(numb);
}

//Exercise 4 : Attendance

let guestList = {
	Randy: "Germany",
	Karla: "France",
	Wendy: "Japan",
	Norman: "England",
	Sam: "Argentina"
  }
  
let username = prompt("Please give me your name :");
console.log(guestList[username]);
if (username in guestList === true) {
	console.log("Hi! I'm " + username + ", and I'm from " + guestList[username]);
} else {
	console.log("Hi! I'm a guest.");
}

//Exercise 5 : Family

let Family = {
	Father: "David",
	Mother: "Batsheva",
	Son: "Solomon",
	Daughter: "Tamar"
}
var properties="";
var values="";
var x;
var y;
for (y in Family) {
 properties +=y+" ";
}
for (x in Family) {
	values += Family[x]+" ";}
console.log(properties);
console.log(values);

//Exercise 6 : Secret Group

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let order = names.sort();
console.log(order);
let society = "";
for (i=0;i<names.length;i++) {
	society +=names[i][0];
}
console.log(society);
	

