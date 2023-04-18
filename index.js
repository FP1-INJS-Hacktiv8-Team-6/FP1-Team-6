const express = require("express")
const app = express()
const port = 1234
const route = require("./router/route")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/api/v1", route)

app.listen(port, () => {
  console.log(`Server connection success on http://localhost:${port}`)
})
