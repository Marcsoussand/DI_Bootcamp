// Exercise 1


let array = [1, 2, 6, 5, 8, 7];
let sum = 0;

array.forEach((number) => {
    sum += number;
})

console.log(sum);

// Exercise 2

let array2 = [1, 5, 6, 4, 1, 2, 5, 8, 4];
let duplicate = [];


array2.forEach((number) => {

    if (!duplicate.includes(number)) {
        duplicate.push(number);
    }
})

console.log(duplicate);

// Exercise 3

//Write a JavaScript function to remove. ‘null’, ‘0’, ‘“”’, ‘false’, ‘undefined’ and ‘NaN’ values from an array.

let array3 = [NaN, 0, 15, false, -22, '',undefined, 47, null];


array3.forEach( (n,index) => {
    console.log(n);
    Boolean(n) ? ((n == undefined) ? array3.splice(index,1) : null) : array3.splice(index,1);
    

})

console.log(array3);

// Exercise 4 

//repeat yourself
let result4="";

function repeat (str,n) {
    for (i=0;i<n;i++) {
        result4 += str;
    }
    return result4;
}

console.log(repeat('Ha!',3));