const exp = require('express');
const app = exp();

app.get('/aboutMe/:hobby', (req, res) => res.send('<h1>This is an HTML Tag</h1>'));

app.listen(3000);