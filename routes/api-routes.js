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

app.post("/api/workouts", (req, res) => {
    db.Workout.create({}, (err, data) =>{
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

app.put("/api/workouts/:id", (req, res) =>{
    db.Workout.findOneAndUpdate(
        {_id: req.params.id},
        { $push: { exercises: req.body}},
        { new: true}, (err, data) =>{
            if (err) {
                console.log(err)
            } else {
                res.json(data)
            }
        })
})


// Export app
module.exports = (app)

