const { Pool } = require("pg")

const config = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "FP1_ReflectionAPI",
  password: "akmal",
  port: 5432,
})

module.exports = config
