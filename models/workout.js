// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Workout Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
            type: {
                type: String,
                require: "Select Type of Exercise"
            },
            name: {
                type: String,
                require: "Please Enter a Name"
            },
            duration: {
                type: Number,
                require: "Please Enter a Duration"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }
        }
    ]
}, {
    // When sending JSON, allow virtuals 
    toJSON: { virtuals: true }
});

// Calculate the 'Total Workout Duration:' 
WorkoutSchema.virtual('totalDuration').get(function () {
    return this.exercises.reduce((acc, curVal) => acc + curVal.duration, 0)
});

// Give the model a variable
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export model
module.exports = Workout;