//Exercise 1

const compareToTen = (n) => {
    let test = new Promise((resolve, reject) => {
        if (n > 10) {
            resolve(n + " larger than 10, success!");
        }
        else {
            reject(n + " smaller than 10, error!");
        }
    })
    return test;
};

// console.log(testNum(12));
// .then(result => console.log(result))
// .catch (error => console.log(error))

compareToTen(15)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

//Exercise 2

// Question 1
let fourSeconds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

fourSeconds
    .then(result1 => console.log(result1))
    .catch(error => console.log(error + " Oops something went wrong"))

//Question 2
let fourSeconds2 = Promise.resolve("success");


fourSeconds2
    .then(result1 => console.log(result1))
    .catch(error => console.log(error + " Oops something went wrong"))

// Question 3
fourSeconds
    .then(result1 => {
        console.log(result1);
        throw "Oops I did it again";
    })
    .catch(error => console.log(error + " Oops something went wrong"))




// EXERCISE 3

let prom31 = Promise.resolve();
let prom32 = Promise.reject();

prom31
    .then(result => console.log(3))
    .catch(error => console.log(error))

prom32
.then(result => console.log(result))
.catch(error =>console.log("Boo!"))