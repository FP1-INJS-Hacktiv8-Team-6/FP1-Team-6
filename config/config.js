const Pool = require('pg')

<<<<<<< Updated upstream
const config =new Pool({
    user : "postgres",
    host:"localhost",
    database : "FP1_team6",
    password : "020711",
    port :5432
=======
const config = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "reflectionAPI",
  password: "123",
>>>>>>> Stashed changes
})

module.exports = config