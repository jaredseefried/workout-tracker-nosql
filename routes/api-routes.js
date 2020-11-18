// Dependencies
const express = require('express')
const app = express()

// Require models folder
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

// POST to create new workout object
app.post("/api/workouts", (req, res) => {
    db.Workout.create({}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
})

// PUT to update _id
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.json(data)
            }
        })
})

//GET for the stats page
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data)
        }
    })
        .limit(7)
})

// Export app
module.exports = (app)