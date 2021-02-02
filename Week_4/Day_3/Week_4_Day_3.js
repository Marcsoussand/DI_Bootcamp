// let array = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// var maxTest;
// for (i = 0; i < array.length; i++) {
//     for (j = i + 1; j < array.length; j++) {
//         if (array[i] < array[j]) {
//             maxTest = array[i];
//             array[i] = array[j];
//             array[j] = maxTest;
//         }
//     }

// }
// console.log(array);


// var stringTemp;
// var counter = 0;

// let str = "word in a given String";
// for (i = 0; i < str.length; i++) {
//     if (str.charAt(i) == " ") {
//         for (j = i - 1; j < counter; j--) {
//             stringTemp = stringTemp + str.charAt(j);
//             counter = i;


//         }

//     }
// }
// console.log(stringTemp);

// JavaScript Instructor09:35
/* Exercise
* Sort any array using a for loop tip: use nested loop
* Do not use the Array.sort method
* For example:
* Given this array [5,0,9,1,7,4,2,6,3,8]
* result [9,8,7,6,5,4,3,2,1,0] or
* [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
* hint - use a temporary VARIABLES
*/
// Igor09:38
// Week 2 - > Day 3 -> Challenge Gold
// Igor09:59
// const numbers = [5,0,9,1,7,4,2,6,3,8];
// var temp;
// for (let i = 0; i < numbers.length; i++){
//     for (let b = i + 1; b < numbers.length; b++){
//         if (numbers[i] < numbers[b]){
//             temp = numbers[i];
//             numbers[i] = numbers[b];
//             numbers[b] = temp;
//         }
//     }
// }
// console.log(numbers);
// Igor10:03
// let clone = Object.assign({}, groceries);
// JavaScript Instructor10:05
// /* Exercise reverse
// *  reverse each word in a given String
// *  For example:
// *  Given this 'word in a given String'
// *  result 'drow ni a nevig gnirtS'
// *  Do not use Array method
// */
// Amichai Berger10:21
// I finished
// JavaScript Instructor10:41
// function reverseWord(str) {
//   // let arr = str.split('');
//   let ret = "";
//   for (var i = str.length-1; i >= 0; i--) {
//     ret = ret + str[i]
//   }
//   return ret;
// }

// function reverseAll(str) {
//   let arr = str.split(" ");
//   arr.forEach ( (item,i,ret) => {
//     ret[i] = reverseWord(item);
//   })
//   return arr.join(' ');
// }
// console.log(reverseAll('word in a given String'));
// JavaScript Instructor10:47
// /* Exercise
// * Create an function that get an array of Numbers as input
// * and return a new array with all numbers multiply by 2
// * For example:
// * Give this array [1,2,3,4]
// * result [2,4,6,8]
// */
// JavaScript Instructor10:57
// let users = ['eli','adam','galina','ziv'];
// const emails = users.map( item => {
//    return item +'@gmail.com';
// });
// console.log(emails);

// let arr1 = [1, 2, 3, 4];
// let arr2 = arr1.map(x => {
//   return [x * 2];
// });
// console.log(arr2);
// JavaScript Instructor11:03
// /* Exercise
// * Create an function that get an array of Numbers as input
// * and return a new array with all numbers greater than 3
// * For example:
// * Give this array [0,1,1,2,3,5,8]
// * result [5,8]
// */
// JavaScript Instructor11:08
// let arr = [0,1,1,2,3,5,8];
// const filterArr = arr.filter( item => {
//   return item > 3;
// });
// console.log(filterArr);

const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
// get all names that start with Sa

const filterSa = dragons.filter(item => {
    return (item.charAt(0) == "S" && item.charAt(1) == "a");
});
console.log(filterSa);



// JavaScript Instructor11:41
/* Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/


// JavaScript Instructor11:48
// /* reduce */
// let numbers = [2, 5, 10,100];
// const newNumbers = numbers.reduce((total, item) => {
//   return total + item;
// });
// console.log(newNumbers);
// JavaScript Instructor11:50
// const total = numbers.reduce((accumulator, item) => {
//   return accumulator + item;
// }, 3000)
// console.log(total);
// JavaScript Instructor11:52
// let account = [{dolars:2}, {dolars:5}, {dolars:10},{dolars:100}];
// const total = account.reduce((accumulator, item) => {
//   return {dolars:(accumulator.dolars + item.dolars)};
// })
// console.log(total);
// JavaScript Instructor12:03
// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


let n = 13218954545;

function nToArray(n) {
    const arrayN = Array.from(String(n), Number);
    console.log(arrayN);
    return arrayN;
}

function result(n) { 
    var temp = nToArray(n);

while (temp.length > 1) {
    var temp2 = temp.reduce((total, item) => {
          return total + item;})
          console.log(temp2)
          temp = nToArray(temp2);
}
return temp2;
}


console.log(result(n));