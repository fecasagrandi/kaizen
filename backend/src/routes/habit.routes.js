const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habit.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Aplicar middleware de autenticação para todas as rotas
router.use(authMiddleware);

// Listar todos os hábitos do usuário
router.get('/', habitController.getAllHabits);

// Obter um hábito específico
router.get('/:id', habitController.getHabitById);

// Criar um novo hábito
router.post('/', habitController.createHabit);

// Atualizar um hábito
router.put('/:id', habitController.updateHabit);

// Excluir um hábito
router.delete('/:id', habitController.deleteHabit);

// Marcar um hábito como concluído para o dia
router.post('/:id/complete', habitController.completeHabit);

// Obter estatísticas de um hábito
router.get('/:id/stats', habitController.getHabitStats);

module.exports = router;
