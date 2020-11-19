// Dependencies
const express = require('express')
const app = express()

// Require models folder
const db = require('../models')

// GET all workouts from database
app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.send(err)
        })

})

// POST to create new workout object
app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
    .then(results => {
        res.json(results)
    })
    .catch(err => {
        res.send(err)
    })
    
})

// PUT to update exercise _id
app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true })
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.send(err)
        })
})

//GET for the stats page
app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            res.send(err)
        })
        .limit(7) // limit to 7 entries
})

// Export app
module.exports = (app)