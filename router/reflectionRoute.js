const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("ini menampilkan reflection sendiri")
})

app.post('/',(req,res)=>{
    res.send("ini menambah reflection")
})

app.put('/:id',(req,res)=>{
    res.send("ini untuk update reflection by id")
})

app.delete('/:id',(req,res)=>{
    res.send("ini untuk menghapus reflection by id")
})
module.exports= app