const express = require("express")
const app = express()
const {
  createReflection,
  getAllReflections,
  updateReflection,
  deleteReflection,
  getUserActiveID,
} = require("../controllers/reflectionController")
const authorization = require("../middleware/authorization")

app.get("/", getAllReflections)
app.post("/", createReflection)
app.use("/:id", authorization)
app.put("/:id", updateReflection)
app.delete("/:id", deleteReflection)

module.exports = app
