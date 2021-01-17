let addressNumber = "65 ";
let addressStreet = "Haatsmaout ";
let country = "Israel";

let global_address = addressNumber + addressStreet + country

console.log (global_address);

let birthYear = "1983";
let futureYear = "2025";
let futureAge = futureYear - birthYear;
console.log ("I will be " + futureAge + " in " + futureYear);

let pets = ["cat", "dog", "rabbit", "fish", "cow"];
console.log (pets[4]);
pets.push("horse");
console.log(pets);
console.log(pets.length);

// Exercise Guess the answers
5 + "34";
5 - "4";
10 % 5;
5 % 10;
"Java" + "Script";
" " + " ";
" " + 0;
true + true;
true + false;
false + true;
false - true;
3 - 4;
"Bob" - "bill";

// Exercise Favorite Color
let me = ["my ","favorite ","color ","is ","blue"];

let color = me[0]+me[1]+me[2]+me[3]+me[4];
console.log(color);

// Mixup

let str1 = "Paris";
let str2 = "Magique";
let str10 = str1.slice(0,2);
let str20 = str2.slice(0,2);
let str11 = str1.slice (2,str1.length);
let str21 = str2.slice (2,str2.length);

console.log(str20+str11+" "+str10+str21);


// Calculator

let num1= prompt("Please give a first number","");
let num2=prompt("Please give a second number","");
// let op=prompt("Which operation to you want to proceed ? sum ? substract ? multiply ? divide ?","");
// console.log(op);
// if (op === "sum") {
let result=parseInt(num1,10)+parseInt(num2,10);
// else if (op="substract") {
//     let result=parseInt(num1,10)-parseInt(num2,10);}
//     else if (op="multiply") {
//         let result=parseInt(num1,10)*parseInt(num2,10);}
//         else if (op="divide") {
//             let result=parseInt(num1,10)/parseInt(num2,10);}
//             else {
//                 result="Wrong operation"}
alert(result);

// Find Nemo

let Find = prompt("Please give me a string");
let place = Find.search("Nemo");
console.log(Find + "   I found Nemo at" + place);