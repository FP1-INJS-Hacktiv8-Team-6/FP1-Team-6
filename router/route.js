const express = require("express")
const app = express()
const users = require("./userRoute")
const reflect = require("./reflectionRoute")
const { authentication } = require("../middleware/authentication")

app.use("/users", users)
app.use(authentication) // -> Auth Middleware
app.use("/reflections", reflect)

module.exports = app
