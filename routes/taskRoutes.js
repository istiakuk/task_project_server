// routes/taskRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middleware/authMiddleware');

// Routes accessible by both admin and users
router.get('/user/tasks', authenticateToken, taskController.getUserTasks);

// Route to get a single task by id
router.get('/:id', authenticateToken, taskController.getTaskById);

// Routes accessible only by admins
router.post('/', authenticateToken, taskController.createTask);
router.put('/:id', authenticateToken, taskController.updateTask);
router.delete('/:id', authenticateToken, taskController.deleteTask);

// Route to update task status (accessible by assigned users)
router.put('/:id/status', authenticateToken, taskController.updateTaskStatus);

// Route to get all tasks (accessible only by admins)
router.get('/', authenticateToken, taskController.getAllTasks);

// Route to get all tasks by projectId
router.get('/project/:projectId', authenticateToken, taskController.getAllTasksByProjectId);

module.exports = router;
