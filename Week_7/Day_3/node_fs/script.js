const fs = require('fs');
const bodyParser = require("body-parser")

// readFile
// fs.readFile('./data.txt',(err, data) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })
// console.log('after reading the file');
// let str = 'salut les copains';
// fs.appendFile('./data.txt',str,err =>{
//     if(err) {
//         console.log(err);
//     }
// })


//readFileSync 
// try {
//     const f =fs.readFileSync ('./data.txt');
//     console.log(f.toString());
// }
// catch (e){
//     console.log(e.message);
// }
// console.log('after reading the file');


// writeFile change everything in the file
// fs.writeFile('./data.txt','bla bla bla', err => {
//     if (err) {
//         console.log(err);
//     }
// })

//unlink delete the file
// fs.unlink('./data.txt', err=> {
//     if (err) {
//         console.log(err);
//     }
// })

// fs.copyFile('./data.txt','./datanew.txt',err => {
//     if (err) {
//         console.log(err);
//     }
// })

const exp = require('express');
const app = exp();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/search', (req, res) => {
    console.log(req.body)
    res.send('welcome, ' + req.body.username)
})

function sendData() {
    let username = document.getElementById('username').value;  
    let userdata = {
      username,
    }
    console.log(userdata);

app.route('/')
  .get( (req,res)=> {
        const user = req.query.user;
    console.log(user);
    const data = {
      message: 'Welcome',
      user
    }
    console.log(data);
    res.send(data)
  })

  
  fetch('http://localhost:3000/',{
    method:'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userdata)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById('root').innerHTML = `${data.message} ${data.user}`
  })
  .catch(e => console.log(e))
}





