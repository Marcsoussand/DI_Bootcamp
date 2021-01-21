//Mini-Project Hangman
// All extra-rules are in
//10 lives with the counter lives
//Incorrect letters stored in arrayWrong
//Prevent the user to reuse the same letter loop while on line 29/30
// Messages win/lose on lines 55-59

let hangman = prompt("Player 1 : Enter a word")
let lives = 10;
let testLives = false;
let guessLetter = "";
let array = hangman.split("");
let arrayWrong= [];

let guessArray = hangman.split("");

for (i = 0; i < hangman.length; i++) {
    guessArray[i] = "*";
}

console.log("The hidden word : “" + guessArray.join('') + "“");
console.log("You have 10 lives");
// console.log(guessArray);
// console.log(array);


while (guessArray.join('')!=array.join('') && lives > 0) {
    guessLetter = prompt("Player 2 : Please guess a letter")

    while (arrayWrong.includes(guessLetter)===true) {
        guessLetter = prompt("Player 2 : Letter, already tried, please guess another letter")
    }

    for (i = 0; i < hangman.length; i++) {
        if (guessLetter == array[i]) {
            guessArray[i] = guessLetter;
            testLives = true;
        }

    }
    if (testLives == false) {
        lives -= 1;
        arrayWrong.push(guessLetter);
    }
    testLives = false
    console.log("The hidden word : “" + guessArray.join('') + "“");
    console.log("You have " + lives + " lives left");
    // console.log(guessArray);
    // console.log(array);
    console.log("The wrong letters you have already guessed : "+arrayWrong);


}

if (lives == 0) {
    console.log("Sorry, you just lost, you are out of lives");
} else {
    console.log("Congratulations you just won !!!")
}





