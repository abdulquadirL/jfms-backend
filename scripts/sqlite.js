const knex = require('knex')

module.exports = knex({
  client: 'sqlite3',
  connection: {
    filename: '.tmp/data.db'
  },
  useNullAsDefault: true,
})
