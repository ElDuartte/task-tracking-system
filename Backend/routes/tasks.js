// routes/tasks.js
const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

// Get all tasks
router.get("/", tasksController.getAllTasks);

// Create a new task
router.post("/", tasksController.createTask);

// Update a task
router.put("/:id", tasksController.updateTask);

// Delete a task
router.delete("/:id", tasksController.deleteTask);

module.exports = router;
