require("dotenv").config();

const workoutRoutes = require("./routes/workouts.js");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use("/api/workout/", workoutRoutes);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("app is listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
