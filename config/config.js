const { Pool } = require("pg")

const config = new Pool({
  user: "postgres",
  host: "localhost",
  database: "FP1_ReflectionAPI",
  password: "akmal",
  port: 5432,
})

module.exports = config
