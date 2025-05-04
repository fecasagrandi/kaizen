const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Aplicar middleware de autenticação para todas as rotas
router.use(authMiddleware);

// Obter perfil do usuário
router.get('/profile', userController.getProfile);

// Atualizar perfil do usuário
router.put('/profile', userController.updateProfile);

// Obter estatísticas do usuário
router.get('/stats', userController.getStats);

// Obter progresso do usuário
router.get('/progress', userController.getProgress);

// Obter nível e XP do usuário
router.get('/level', userController.getLevel);

module.exports = router;
