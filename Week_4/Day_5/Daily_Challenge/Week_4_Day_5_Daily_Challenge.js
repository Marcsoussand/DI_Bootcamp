// let array = [];
// let array = [1,2,3,4,5];
// let array = [1,2,3,4,5,6];
let array = [1,2,3,4,5,6,7,8,9,10];

function reverseArray(arr) {
    var temp = 0;
    for (i=0;i<arr.length/2;i++) {
        temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i]=temp;
    }
    return arr;

}

console.log(reverseArray(array));