const express = require('express');
const router = express.Router();

const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const habitRoutes = require('./habit.routes');
const taskRoutes = require('./task.routes');
const challengeRoutes = require('./challenge.routes');

// Auth routes
router.use('/auth', authRoutes);

// User routes
router.use('/users', userRoutes);

// Habit routes
router.use('/habits', habitRoutes);

// Task routes
router.use('/tasks', taskRoutes);

// Challenge routes
router.use('/challenges', challengeRoutes);

// API health check
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', message: 'API funcionando corretamente' });
});

module.exports = router;
