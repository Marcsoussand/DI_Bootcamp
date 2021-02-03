// let b = 3, d = b, u = b;
// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ + u

//  4*4*3*3+3+4+3*3 +3
//  144+3+4+9+3


// let candleArray = [1,5,4,8,9,6,5,4,9];
// const maxCandle = Math.max(...candleArray);
// big

// function birthdayCakeCandles(arr) {
//     let maxNum = Math.max(...arr);
//     let filtered = arr.filter( value => {
//         return value === maxNum;
//     });
//     return filtered.length;
// }
// console.log(birthdayCakeCandles([2,4,4,1]))

// /*
// * findIntersection function return an array that
// * contain the numbers exist in both strings from the array.
// * ["1,2,5,6,7", "2,5,7,8,15"] => [2,5,7]
// */

// let array = ["1,2,5,6,7", "2,5,7,8,15"];
// function findIntersection(array) {
// var array1=array[0].split(',');
// var array2=array[1].split(',');
//  let test =array1.filter(value => array2.includes(value));
     
//  console.log(test);
//  return test;
// }

// findIntersection(array);

// console.log(findIntersection(array));

// function checkMe(arr) {
//     let str1 = arr[0].split(',');
//     let str2 = arr[1].split(',');
//     let result = str1.filter(value => str2.includes(value));
//     return result;
   

/* Nested Object Destructuring */
// const population5 = {
//     tokyo: 37833000,
//     delhi: 24953000,
//     shanghai: 22991000,
//     datetime:{
//       time:1600,
//       date:02022021
//     }
//   }
//   const {tokyo,datetime:{time,date}} = population5
//   console.log(tokyo,time,date);

//   /* Function Destructuring */
// const dist = (obj) => {
//     const tokyo = obj.tokyo;
//     const delhi = obj.delhi;
//     const shanghai = obj.shanghai;
//     const time = obj.datetime.time;
//     const date = obj.datetime.date;
//     console.log(tokyo,delhi,shanghai,time,date);
//   }
//   dist(population5)


  // filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map
// [
//   { id: 'user1', age: 44, name: 'picard' },
//   { id: 'user3', age: 109, name: 'janeway' },
// ]
arrUsers =  [{ id: 'user1', age: 22, name: 'picard' },{ id: 'user3', age: 109, name: 'janeway' },];

const filterAge = arrUsers.filter( Object =>  Object.age >= 30);
const usersData = filterAge.map(Object => [Object.age,Object.name]);
    
const dataOneLine = arrUsers.filter(Object => (Object.age >=30)) .map(Object =>[Object.age,Object.name]);

console.log(filterAge);
console.log(usersData);
console.log(dataOneLine);

// JavaScript Instructor12:00
// const usersKeys = Object.keys(users);
// const adults = usersKeys
//   .filter(key => users[key].age > 30)
//   .map(id => ({ id, ...users[id] }));
// console.log(adults);
// Igor12:18
// Adam, do you remember our first block in Hackathon?  ))
// class Item {
// constructor(id, name, co2) {
// this.id = id;
// this.name = name;
// this.co2 = co2;}}
// JavaScript Instructor12:49
// class Fruit {
//   constructor(param){
//     this.name = param;
//   }
//   setName(param){
//     this.name = param;
//   }
//   getName() {
//     return this.name;
//   }
// }
// // let apple = new Fruit('Aplle');
// // let orange = new Fruit('Orange');
// // console.log(apple.getName());
// // console.log(orange.getName());
// class Orange extends Fruit {
//   constructor(){
//     super('Ornage');
//     this.color = '';
//   }
//   setName(param){
//     this.color = param;
//   }
// }
// let orange = new Orange();
// console.log(orange.getName());
// class GreenOrange extends Orange {
//   constructor(){
//     super();
//     this.color = 'Green';
//   }
//   getColor(){
//     return this.color;
//   }
// }
// let go = new GreenOrange();
// console.log(go.getName());
// console.log(go.getColor());