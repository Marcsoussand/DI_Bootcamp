// Exercise 1

const sum = (a,b) => a+b;
console.log(sum(5,3));

// Exercise 2

// const addTo = x => y => x + y;
// var addToTen = addTo(10);
// console.log(addToTen(3));

//Initial guess 13
//return 13 as there is two calls of the function addTo(), one with the var and one with the console log

// Exercise 3

// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b


// console.log(curriedSum(30)(1));

//Initial guess 31
// return 31, sum is unused, curriedSum with (30) and (1) used the first input to sum with the second.

// Exercise 4

// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// console.log(add5(12));

// Initial guess 17
// return 17 as expected, 5 stored then 12 in curried sum.

// Exercise 5

// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// console.log(compose(add1, add5)(10));

// Initial guess 16 with add1(add5(10)) means value 10, apply +5, and apply to this +1
// Return 16 as expected

