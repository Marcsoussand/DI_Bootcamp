let makeAllCaps = (arr) => {
    let caps = new Promise((resolve, reject) => {
        // var result = [...arr];
        for (i=0;i<arr.length;i++) {
            if (typeof arr[i] === 'string') {
                arr[i] = arr[i].toUpperCase();
            }
            else {reject("Not a string");}
        }
        resolve(arr)
    })
    return caps;
}

let sortWords = (arr) => {
let sortW = new Promise((resolve,reject) => {
    for (i=0;i<arr.length;i++) {
        if (typeof arr[i] != 'string') {
            reject("Not a string");
        }
    }
    arr.sort();
    resolve(arr)
})
return sortW;
}

let arrayOfWords= ["Hello","cucumber","how","are","you","avocado","tomatos"];

let complicatedArray = [3,"Hello",undefined,null,"Oops"];

// console.log(makeAllCaps(arrayOfWords));
// console.log(makeAllCaps(complicatedArray));
// console.log(sortWords(arrayOfWords));
//  console.log(sortWords(complicatedArray));

makeAllCaps(arrayOfWords)
      .then(sortWords)
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(complicatedArray)
      .then(sortWords)
      .then((result) => console.log(result))
      .catch(error => console.log(error))