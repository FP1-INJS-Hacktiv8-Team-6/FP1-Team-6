const { Pool } = require("pg")

const config = new Pool({
  user: "postgres",
  host: "localhost",
  database: "reflectionAPI",
  password: "123",
  port: 5321
})

module.exports = config
