// JavaScript Instructor09:37
// For today’s algorithm, we are going to write a function called
// getMoneySpent that will take in three inputs:
// two arrays keyboards and drives and an integer budget.

// let budget = 10;
// let keyboards = [3, 1];
// let drives = [5, 2, 8];

// // the first keyboard
// 3 + 5 = 8
// 3 + 2 = 5
// 3 + 8 = 11
// // second keyboard
// 1 + 5 = 6
// 1 + 2 = 3
// 1 + 8 = 9

let budget = 9;
let keyboards = [3, 1];
let drives = [5, 2, 8];

function getMoneySpent(arr1, arr2) {
    var arrTemp = [];
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if ((arr1[i] + arr2[j]) <= budget) {
                arrTemp.push(arr1[i] + arr2[j]);
            }
        }
    }

    return Math.max(...arrTemp);
}

console.log(getMoneySpent(keyboards, drives));