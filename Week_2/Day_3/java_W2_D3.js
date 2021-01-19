//Exercise 1

for (let i=0;i<=15;i++) {
	if (i%2 == 0) {
		console.log(i + " is even");
	} else {
		console.log(i + " is odd");
	}
}

//Bonus exercise
let friends = ["Lea", "Jonas", "David"]
for (let i=0;i<=friends.length-1;i++) {
    console.log("Hello " + friends[i]);
}

// Exercise 2

let names= ["john", "sarah", 23, "Rudolf",34];
stop=names.length-1;
// initial consoles to check variables
// console.log(names[1][0].toUpperCase());
// console.log(names[1][0])
// console.log(names[1][0] !=names[1][0].toUpperCase())
// names[1][0] = names[1][0].replace(names[1][0].toUpperCase());
// console.log(names[1]);

for (let i=0;i<=stop;i++)
	{ if (typeof(names[i])=== "string" && names[i][0] !=names[i][0].toUpperCase()){
		console.log(names[i][0].toUpperCase() + names[i].substring(1));
	continue;}
	 else if (typeof(names[i])=== "string") {
		console.log(names[i]);
	 } else

		continue;
	} 
	
