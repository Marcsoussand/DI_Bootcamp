const knex = require('knex');


const db = knex ({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
    //   port : '5432'
      user : 'postgres',
      password : 'Tel1avi,',
      database : 'dvdrental'
    }
})


db.transaction(
    trx => {
        trx('country')
        .returning('*')
        .insert({
            country: 'Javascript'
        })
        .then(data => {
            return trx('country')
            .returning('*')
            .insert({
                country:"Python"
            })
            .then(data => {

            })
            .catch(err =>{
                console.log(err)
            })
        })
        .then(
            trx.commit
        )
        .catch(trx.rollback)
    }
)
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
.returning('*')
.then(data => {
    console.log(data);
})
.catch(err =>{
    console.log(err)
})

