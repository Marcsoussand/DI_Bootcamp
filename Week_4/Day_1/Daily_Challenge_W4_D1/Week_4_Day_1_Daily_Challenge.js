const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];


// 1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
let array = [];
gameInfo.forEach((object, i) => {
    array[i] = object.username + "!";
});

console.log(array);

//2. Create an array using forEach that contains the usernames of all players which score is bigger than 5.
//Tip: Use ternary operator

let array2=[];

gameInfo.forEach((obj,j) => {
        (obj.score > 5)  ? array2[j]=obj.username : array2.slice(j,1);
});
const arrFiltered = array2.filter(el => {
    return el != null && el != '';
  });
  console.log(arrFiltered);


//I don't get why I have an "empty" in the beginning

//3. Find the total score of the users, and display it.
let sum=0;
gameInfo.forEach((ob) => {
    sum+=ob.score;
})

console.log(sum);