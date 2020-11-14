// Dependencies 
const express = require('express')
const app = express()
const path = require('path')

// GET index.html
app.get("/", (request, response) =>{
    response.sendFile(path.join(__dirname, '../public/index.html'))
})

// GET exercise.html
app.get("/exercise", (request, response) =>{
    response.sendFile(path.join(__dirname, '../public/exercise.html'))
})

// GET stats.html
app.get("/stats", (request, response) =>{
    response.sendFile(path.join(__dirname, '../public/stats.html'))
})

// Export app
module.exports = (app)