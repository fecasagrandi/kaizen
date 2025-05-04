const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Registro de novo usuário
router.post('/register', authController.register);

// Login de usuário
router.post('/login', authController.login);

// Refresh token
router.post('/refresh-token', authController.refreshToken);

// Logout
router.post('/logout', authController.logout);

module.exports = router;
