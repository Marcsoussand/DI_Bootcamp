let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1.Remove the Banana from the array.
fruits.splice(0,1);
console.log(fruits);
// 2.Sort the array in order.
fruits.sort();
console.log(fruits);
// 3.Put “Kiwi” at the end of the array.
fruits.push("Kiwi");
console.log(fruits) ;
// 4.Remove “Apples” from the array. Don’t use the same method as in the question 1.
fruits.reverse();
fruits.pop();
fruits.reverse();
console.log(fruits);
// 5.Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// You should have at the end: ["Kiwi", "Oranges", "Blueberries"]
fruits.reverse();
console.log(fruits);

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// 1.Access the item “Oranges”.
console.log(moreFruits[1][1][0]);
