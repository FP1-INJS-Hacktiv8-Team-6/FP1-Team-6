const { Pool } = require("pg")

const config = new Pool({
  user: "postgres",
  host: "localhost",
  database: "reflectionAPI",
  password: "020711",
  port: 5432
})

module.exports = config
