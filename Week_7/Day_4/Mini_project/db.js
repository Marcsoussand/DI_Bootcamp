const knex = require('knex');
const exp = require('express');
const bp = require('body-parser');
// const fs = require('fs');
const bcrypt = require('bcrypt');
const saltRounds=10;

const app = exp();

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        //   port : '5432'
        user: 'postgres',
        password: 'Tel1avi,',
        database: 'UsersExercise'
    }
})

app.use('/', exp.static(__dirname + '/public'));

app.post('/user', (req, res) => {
    console.log(req.body);
    //   const {user} =req.body;
    createUser(req.body)
        .then(data => {
            res.send({ message: 'OK' })
        })
        .catch(err => {
            res.send({ message: err.detail })
        })
})

function createUser({ user,pass }) {
    const salt= bcrypt.genSaltSync(saltRounds);

    // console.log('111',user,pass);
    return db('users').insert({
        username: user,
        password: bcrypt.hashSync(pass,salt)
    }
    )
        .returning('*')
}

app.get('/show', (req, res) => {
    db('users')
        .select('username')
        .then(data => {
            console.log(data);
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })
        })

    //   res.send(users)
})

app.post('/find', (req, res) => {
    console.log(req.body);
    const {user,pass} = req.body;
    db('users')
        .select('user_id', 'username','password')
        .where({ username: user })
        .then(data => {
            console.log(data);
            if (data.length > 0) {
                if(bcrypt.compareSync(pass,data[0].password)){
                // res.send({ message: `Found => ${data[0].username} id =>${data[0].user_id}` })
            res.send({message:`Welcome ${data[0].username}`})
            }
            else {
                res.send({message:'Wrong password'})
            }
        }
            else {
                res.send({ message: 'Not Found' })
            }
        })
        .catch(err => {
            console.log(err);
            res.send({ message: err.detail })

        })
})


app.listen(3000)


// const db = knex ({
//     client: 'pg',
//     connection: {
//       host : '127.0.0.1',
//     //   port : '5432'
//       user : 'postgres',
//       password : 'Tel1avi,',
//       database : 'UsersExercise'
//     }
// })


// db.transaction(
//     trx => {
//         trx('username')
//         .returning('*')
//         .insert({
//             username: 'Marc'
//         })
// //         .then(data => {
// //             return trx('country')
// //             .returning('*')
// //             .insert({
// //                 country:"Python"
// //             })
// //             .then(data => {

// //             })
// //             .catch(err =>{
// //                 console.log(err)
// //             })
// //         })
//         .then(
//             trx.commit
//         )
//         .catch(trx.rollback)
//     }
// )
// db.select('*').from('country')
// db('country')
// .where({country_id:112})
// .del()
// .insert([{country:'Narnia1'},{country:'Israel2'}])
// .max('country_id')
// .where({country_id:4})
// .update({
//     country:'Angola'
// })
// return changes
// .returning('*')
// .then(data => {
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err)
// })

