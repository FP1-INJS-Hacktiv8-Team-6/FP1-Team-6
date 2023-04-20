const Pool = require('pg')

const config = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "reflectionAPI",
  password: "123",
})

module.exports = config
