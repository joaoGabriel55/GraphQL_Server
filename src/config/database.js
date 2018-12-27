const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

// knex('users').insert({
//      name: 'Jao',
//      email: 'jaodaroca@hotmail.com',
//      password: 'teste'
// }).then(data => console.log(data))

// Com ou sem "select()" vai realizar uma operação de SELECT SQL.
// first() == retornar o primeiro registro da lista
// where({id: ?})
//knex('users').select('*').then(result => console.log(result))