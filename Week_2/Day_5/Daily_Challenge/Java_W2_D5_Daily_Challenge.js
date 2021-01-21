//Daily Challenge : 99 bottles of beer

let beers = prompt("How many bottles of beer do you want to start ?");
let counter = parseInt(beers, 10);
let varCounter = counter;
let gap = 2;
while (varCounter >= 0 && varCounter-gap>0) {
    if (varCounter == counter) {
        console.log(counter + " bottles of beer on the wall")
        console.log(counter + " bottles of beer")
        console.log("Take it 1 down, pass it around");
        varCounter -= 1;
    }
    else {
        console.log(varCounter + " bottles of beer on the wall")
        console.log(varCounter + " bottles of beer on the wall")
        console.log(varCounter + " bottles of beer")
        console.log("Take " + gap + " down, pass them around");
        varCounter -= gap;
        gap += 1;
    }
}

console.log(varCounter + " bottles of beer on the wall")
console.log(varCounter + " bottles of beer on the wall")
console.log(varCounter + " bottles of beer")
console.log("Take " + varCounter + " down, try now to stand on one leg for one minute, with a finger on the nose");
