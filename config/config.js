const Pool = require('pg')

const config =new Pool({
    user : "postgres",
    host:"localhost",
    database : "FP1_team6",
    password : "020711",
    port :5432
})

module.exports = config