const { Pool } = require("pg")
require('dotenv').config()

const config =new Pool( {
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: "postgres",
  port: process.env.DB_PORT
})
module.exports = config
