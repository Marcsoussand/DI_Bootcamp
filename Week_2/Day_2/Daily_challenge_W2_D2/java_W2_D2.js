let sentence = prompt("What do you think about this meal ?");
let test1 = "not";
let test2 = "bad";
let indexnot = sentence.indexOf(test1);
let indexbad = sentence.indexOf(test2);
let end = indexbad+2;
let part1 = sentence.slice(0,indexnot);
let part2 = sentence.substr(indexbad+3);
if (indexnot < indexbad) {
console.log(part1 + "good" + part2);
} else {
	console.log(sentence);
}
