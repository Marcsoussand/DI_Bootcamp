// Exercise 1 : Random Number

// let number=Math.floor(Math.random() * 101);  
// console.log(number);

// for (i=0;i<=number;i++){
//     if (i%2==0) {
//         console.log(i);
//     }
// }

// Exercise 2 : Capitalized Letters



// function capitalize (str) {
//     let array1 = str.split("");
//     let array2 = str.split("")
//     let arrayVar =[array1,array2];
//     let array = [array1,array2];
//     console.log(array[0][1]);
//     console.log(array[0][2]);


//     for (i=0;i<array1.length;i++){
//         if (i%2 == 0) {
//             console.log(array);
//             array[0][i]= (arrayVar[0][i]).toUpperCase();
//             console.log(array);
//         } 
//         else if (i%2==1) {
//             array[1][i]= (arrayVar[1][i]).toUpperCase();
//             console.log(array);
//         }
//     }
//      result=[array[0].join(''),array[1].join('')];

//     return result;
// }

// console.log(capitalize("abcdefg"));



// Exercise 3 : Is palindrom

// let test = prompt("Test Palindrome");



// function isPalindrom(stri){
//     let result3 = "";

//     for (i=0;i<stri.length;i++){
//         // console.log(stri.charAt(i));
//         // console.log(stri.charAt(stri.length-1-i));
//         if (stri.charAt(i)!=stri.charAt(stri.length-1-i)){

//             result3 = test + " is not a palindrome";
//         } else {
//             result3 = test +" is a palindrome";
//         }
//     }
//     return result3;
// }

// console.log(isPalindrom(test));


// Exercise 4 : Biggest Number

const arrayBig = [-1, 0, 3, 100, 99, 2, 99];// should return 100 
const arrayBig2 = ['a', 3, 4, 2]; // should return 4 
const arrayBig3 = []; // should return 0
// console.log(arrayBig[1])
// console.log(typeof arrayBig2[0] === "number")
let check = [];
let result4 = 0;




function biggestNumber(arr) {
    if (arr.length == 0) {
        result4 = 0;
    }
    else {

        for (i = 0; i < arr.length; i++) {
            if (typeof arr[i] == "number") {
                check.push(arr[i]);
                // console.log(check);
            } else {
                check.push(0);
            }
        }
    
    result4 = Math.max(...check);}
    return result4;
}

console.log("The Biggest number of the array is : " +biggestNumber(arrayBig));
//  console.log(biggestNumber(arrayBig2));
// console.log(biggestNumber(arrayBig3));