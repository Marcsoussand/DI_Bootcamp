// const express = require('express');
// const cors = require('cors')
// const app = express();

// app.use(cors());

// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

// app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));

const exp = require('express');
const bp = require('body-parser');
const knex = require('knex');

const db = knex({
    client:'pg',
    connection:{
      host: '127.0.0.1',
      user: 'postgres',
      password: 'Tel1avi,',
      database: 'Players'
    }
  })
const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));

app.get('/show', (req, res) => {
  db('players')
  .select('player_id','player_name','team_id_player')
  .then(data=> {
    console.log(data);
    res.send(data)
  })
  .catch(err => {
    console.log(err);
    res.send({message:err.detail})
  })
})

app.post('/post',(req, res) => {
  console.log(req.body);
  changePlayer(req.body)
          .then(data => {
          res.send({ message: 'OK' })
      })
      .catch(err => {
          res.send({ message: err.detail })
      })
})

function changePlayer ({playerId,playerName,teamIdPlayer}) {
  // return db.update('')
  const text = `UPDATE players SET player_name=${playerName} WHERE player_id=${playerId} AND team_id_player=${teamIdPlayer}`;
  return db.query(text,
  (err, res) => {
    console.log(err, res);
    db.end();
  })}

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
