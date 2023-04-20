const { Pool } = require("pg")

const config = new Pool({
  user: "postgres",
  host: "127.0.0.1",
<<<<<<< users-feature
  database: "FP1_ReflectionAPI",
  password: "akmal",
  port: 5432,
=======
  database: "reflectionAPI",
  password: "123",
>>>>>>> main
})

module.exports = config
