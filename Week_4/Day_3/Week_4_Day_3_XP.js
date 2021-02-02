//Exercise 1

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//result will spread vegetables and fruits where they are in the array.

// ------2------
const country = "USA";
console.log([...country]);

// spread of the string in array of letters

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

// spread of empty array, don't really know what will happen, ok undefined.


//Exercise 2

// 1. Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
let helloUsers = users.map((object) => {
    return  "Hello " + object.firstName;

})
console.log(helloUsers);

// 2. Using the filter() method, congratulate only the Full Stack Residents.

let filterFullStack = users.filter((object) =>{
    return object.role == "Full Stack Resident";
})

let congratsFullStack = filterFullStack.map((object) => {
    return  "Congrats " + object.firstName + "!";

})

console.log(congratsFullStack);

// Exercise 3

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let starWars = epic.reduce((str,strNext) => {
    // return str+" "+strNext; it works, I will try also the new thing with $ :
    return `${str} ${strNext}`;
})

console.log(starWars);

// Exercise 4

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

let filterStudent = student.filter((object) => {
    return object.isPassed == true;
})
console.log(filterStudent);

let congratsStudent = filterStudent.map((object) => {
    return "Congrats " + object.name+"!";
})

console.log(congratsStudent);


