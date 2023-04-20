const express = require('express')
const app = express()
const { createReflection, getAllReflections, updateReflection, deleteReflection } = require('../controllers/reflectionController')

app.get('/', getAllReflections)
app.post('/', createReflection)
app.put('/:id', updateReflection)
app.delete('/:id', deleteReflection)

module.exports = app