const exp = require('express');
const bp = require('body-parser');

const app = exp();

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());


app.use('/', exp.static(__dirname + '/public'));


app.get('/login', (req, res) => {
    console.log(req.query);
    const user = req.query.u;
    const pass = req.query.p;
    const data = {
        message: 'Welcome',
        user: user
    }
    res.send(data)
});


app.post('/login', (req, res) => {
    console.log('1', req.query);
    console.log('2', req.body);
    res.send('bla bla bla');
})

app.listen(3000);
// app.listen(app.get('port'),()=>{
//     console.log('listen on port 9000')
// })






// const server =http.createServer( (req,resp) => {
//     resp.setHeader('Content-Type','text/html')
//     resp.end('<h1>some data back to browser</h1>')
// })

// server.listen(3000)