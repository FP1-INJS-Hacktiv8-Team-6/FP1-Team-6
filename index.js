const express = require('express')
const app = express()
const port = 1234

app.get('/', (req,res)=>{
    res.send("Welcome to Our Project")
})

app.listen(port,()=>{
    console.log(`Server connection success on http://localhost:${port}`)
})