const users = { user1: 18273, user2: 92833, user3: 90315 };

// 1.Using methods learned in class, turn the users object into an array:
var output = [];
for (x in users) {
    output.push([x, users[x]]);
}
console.log(output);

// 2. Modify the outcome of instruction 1, to multiply the user’s ID by 2

var output = [];
for (x in users) {
    output.push([x, 2*users[x]]);
}
console.log(output);




