const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    duration: {
        type: Number,
        required: true,
    },

    weight: {
        type: Number,
    },

    reps: {
        type: Number,
    },

    sets: {
        type: Number,
    },

    distance: {
        type: Number,
    }

    
});

const workoutSchema = new mongoose.Schema({
    day: {
        type: Date,
        required: true,
        default: new Date(),
    },
    exercises: [exerciseSchema],
});


// create the workout model and export

var Workouts = mongoose.model('fitnesstracker', workoutSchema);
module.exports = Workouts;
