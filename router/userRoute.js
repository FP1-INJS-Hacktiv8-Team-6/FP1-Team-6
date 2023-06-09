const express = require("express")
const app = express()
const { register, login } = require("../controllers/userController")

app.post("/register", register)
app.post("/login", login)

module.exports = app
