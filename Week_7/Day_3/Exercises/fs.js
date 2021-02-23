const fs = require('fs');
const bodyParser = require("body-parser");


//Exercise 1
fs.readFile('./data.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
})

// Exercise 2 
fs.writeFile('./data2.txt', 'new data file', err => {
    if (err) {
        console.log(err);
    }
})




// Exercise 3
fs.writeFile('./data3.txt', 'Bla bla bla', err => {
    if (err) {
        console.log(err);
    }
})

fs.appendFile('./data3.txt','\n'+'more bla bla',err =>{
        if(err) {
            console.log(err);
        }
    })

fs.unlink('./data3.txt', err=> {
    if (err) {
        console.log(err);
    }
    
    console.log("deleted");
})

