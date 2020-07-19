const router = require('express').Router();
const path = require('path');
const Workout = require('../models/workout');

router.get('/exercise', (req, res) => {
    // send exercise.html using res.sendFile
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get('/api/workouts', (req, res) => {
    
    // find all Workouts using mongoose
    // res.json
    Workout.find({})
        .then(dbWorkouts => {
            res.json (dbWorkouts)
        })
        .catch(error => {
            res.status(500).send(error);
        });
});

// creating a new workout
router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(dbWorkouts => {
            res.json (dbWorkouts)
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkouts => {
            res.json (dbWorkouts)
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        });
});

// finding the first 7 workouts
//.limit(7)

router.put ('api/workouts/range', (req, res) => {
    console.log(req.params.id)
    Workout.findByIdAndUpdate.limit(7) (req.params.id, { $push: { exercises: req.body } })
        .then(dbWorkouts => {
            res.json (dbWorkouts)
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        });
});


module.exports = router;

