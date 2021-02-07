//Definition in DOM of the elements

let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let xChoice = document.getElementById("xChoice");
let oChoice = document.getElementById("oChoice");
let firstChoice = document.getElementById("firstChoice");
let restart = document.getElementById("restart");
let container = document.getElementById("container");
var symbol = "X";
var xSymbol = "O";
let array = [, , , , , , , , ,];
const boxes = document.querySelectorAll(".box");

const winCombos = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]

]
start();
function start() {
    // Choice of X or O, var symbol affected and line with choice is hidden
    xChoice.addEventListener('click', function () {
        symbol = "X";
        xSymbol = "O";
        console.log(symbol);
        firstChoice.setAttribute('style', 'display:none');
        alert("Your turn to play !")
    });
    oChoice.addEventListener('click', function () {
        symbol = "O";
        xSymbol = "X";
        console.log(symbol);
        firstChoice.setAttribute('style', 'display:none');
        alert("Your turn to play !")
    });

    for (i=0;i<9;i++) {
        boxes[i].addEventListener("click",write,false);
    }
}

function write (tic) {
 tic.target.id.innerText = symbol;
    
}