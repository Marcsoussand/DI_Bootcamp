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

//posting with the createuser the user in the database.
app.post('/player', (req, res) => {
    console.log(req.body);
    createPlayer(req.body)
            .then(data => {
            res.send({ message: 'OK' })
        })
        .catch(err => {
            res.send({ message: err.detail })
        })
})


// insert into the database the elements in order to get them in the end
function createPlayer({ player, moves, finalTime,secondBoard }) {
    return db('Team').insert({
        player_name: player,
        moves: moves,
        final_time: finalTime,
        second_board: secondBoard,
    })
        .returning('*')
}