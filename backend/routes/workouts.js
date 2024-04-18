const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  deleteWorkout,
  updateWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutControllers");

const router = express.Router();

// get all workouts
router.get("/", getWorkouts);

// get workout by id
router.get("/:id", getWorkout);

// create workout
router.post("/", createWorkout);

// delete workout
router.delete("/:id", deleteWorkout);

// update workout
router.patch("/:id", updateWorkout);

module.exports = router;
