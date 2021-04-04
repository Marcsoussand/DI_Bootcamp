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