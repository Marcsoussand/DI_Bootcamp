let star = -1;
let linenumber = prompt("How many lines do you want ?");
let size = linenumber * 2 - 1;
let array = [];


for (i = 0; i < linenumber; i++) {
star += 2;
    for (j = 1; j <= size; j++) {
        if (j <= Math.floor((size-star)/2) || j > (size - Math.floor((size-star)/2))){
            array.push(" ");
        } else {
            array.push("*");

        }

        
}console.log(array.join(''));
array=[];
}

