// app.js
const express = require("express");
const mongoose = require("mongoose");
const tasksRouter = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/Task-Tracking-System", {
  // Use the new URL parser
  useNewUrlParser: true,
  // Use the new unified topology
  useUnifiedTopology: true,
});

// Use tasks routes
app.use("/api/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
