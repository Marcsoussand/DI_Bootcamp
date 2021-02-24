const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.get('/aboutMe/:hobby:', (req,res) => {

})

app.get('/pic/', (req,res) => {
res.send('')
})

app.get('/form', (req,res) => {

})

app.post('/formData', (req,res) => {

})

app.use(express.static(__dirname + '/public'));

app.listen(3000);