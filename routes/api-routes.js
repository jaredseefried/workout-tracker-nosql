// Dependencies
const express = require('express')
const app = express()

const db = require('../models')

// GET all workouts from database
app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})


// Export app
module.exports = (app)

