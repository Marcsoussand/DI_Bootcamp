const exp = require('express');
const app = exp();

app.get('/', (req, res) => res.send('<h1>This is an HTML Tag</h1>'));

app.route('/aboutMe/:hobby:')
  .get( (req,res)=> {
    console.log(req.query);
    const hobby = req.query.u;
    console.log(user);
    const pass = req.query.p;
    const data = {
      message: 'Welcome',
      user
    }
    console.log(data);
    res.send(data)
  })

app.listen(3000);