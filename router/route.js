const express = require("express")
const app = express()
const users = require("./userRoute")
const reflect = require("./reflectionRoute")

app.use("/users", users)
app.use("/reflections", reflect)

module.exports = app
