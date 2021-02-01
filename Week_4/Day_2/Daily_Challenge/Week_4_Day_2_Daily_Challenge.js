let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
//First try with ... which was perfect for question 1 and 2
let copyGroceries1 = {...groceries};
console.log(copyGroceries1);
//Second try with assign for question 3
// let copyGroceries2= Object.assign   ({},groceries);
// console.log(copyGroceries2);
console.log(groceries);
groceries.totalPrice = "35$";
console.log(groceries);
console.log(copyGroceries1);
// console.log(copyGroceries2);
// Shouldn't modify the total price of the cloned object
// Right, no change
groceries.other.payed = false;
// We see the modification, and I don't kow why, I will check.

//Ok, so ...  as assign is doing only a copy for the elements, but not nested objects, so payed value will change as for groceries.
//Same with assign, it seems that I need to use Json, next week ?





