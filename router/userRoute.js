const express = require('express')
const app = express()

app.post('/login',(req,res)=>{
    res.send("ini login")
})

app.post('/register',(req,res)=>{
    res.send("ini register")
})
module.exports= app