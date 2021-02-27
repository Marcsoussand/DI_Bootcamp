const exp = require('express');
const bp = require('body-parser');
const knex = require('knex');

const db = knex({
    client:'pg',
    connection:{
      host: '127.0.0.1',
      user: 'postgres',
      password: 'Tel1avi,',
      database: 'Memory'
    }
  })
const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));

//posting with the createScore the lines in the database.
app.post('/player', (req, res) => {
    console.log(req.body);
    createScore(req.body)
            .then(data => {
            res.send({ message: 'OK' })
        })
        .catch(err => {
            res.send({ message: err.detail })
        })
})

// insert into the database the elements in order to get them in the end
function createScore({ player, moves, finalTime,secondBoard }) {
    return db('players').insert({
        player_name: player,
        moves: moves,
        final_time: finalTime,
        second_board: secondBoard,
    })
        .returning('*')
}

// presenting the leaderboard, using order by to have the best results in top
app.get('/show', (req, res) => {
    db('players')
        .select('player_name','moves','final_time')
        .orderBy('moves')
        .orderBy('second_board')
        .then(data => {
            console.log(data);
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })
})


app.listen(3000)