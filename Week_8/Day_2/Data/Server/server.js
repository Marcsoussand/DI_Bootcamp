const exp = require('express');
const cors = require('cors');
const DB = require('./modules/db.js');

const app = exp();
app.use(cors());

app.get('/getAllCustomers', (req,res) => {
    
    DB.getCustomer()
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send({message:err.detail})
    })
})


app.listen(9000, () => {
    console.log('listen on 9000');
})