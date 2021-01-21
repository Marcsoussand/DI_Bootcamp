let entry = prompt("Please enter multiple words separated by commas :");
let array = entry.split(",");
// console.log(array);
let lengthMax=0;
let lengthVar=0;

for (i=0;i<array.length-1;i++) {
    lengthVar=array[i].length;
    // console.log("var"+lengthVar);
    // console.log("max"+lengthMax);
    if (lengthVar>lengthMax) {
        lengthMax = lengthVar;
    } 
}

// console.log(lengthMax);
let stars = "";
let print = " ";
let till=0;

for (i=0;i<lengthMax+4;i++) {
    stars +="*"
}
console.log(stars);
for (i=0;i<array.length;i++){
    lengthVar=array[i].length;
    till = lengthMax-lengthVar;
    console.log("* "+array[i]+print.repeat(till)+" *");
}
console.log(stars);

