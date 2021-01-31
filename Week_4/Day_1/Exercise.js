// let arr = [1, 2, 3, 4, 5];
// function reverse(input) {
//     let arrReverse = [];
//     for ( var i= 4; i>=0;i--) {
//             arrReverse.push(input[i]);
//     }
//     return arrReverse;
// }

// console.log(reverse(arr));

let arr = [1, 2, 3, [3,4], 5];

console.log(arr.flat(5));