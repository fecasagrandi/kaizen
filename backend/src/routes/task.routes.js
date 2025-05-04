const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Aplicar middleware de autenticação para todas as rotas
router.use(authMiddleware);

// Listar todas as tarefas do usuário
router.get('/', taskController.getAllTasks);

// Obter uma tarefa específica
router.get('/:id', taskController.getTaskById);

// Criar uma nova tarefa
router.post('/', taskController.createTask);

// Atualizar uma tarefa
router.put('/:id', taskController.updateTask);

// Excluir uma tarefa
router.delete('/:id', taskController.deleteTask);

// Marcar uma tarefa como concluída
router.post('/:id/complete', taskController.completeTask);

// Obter tarefas por categoria
router.get('/category/:categoryId', taskController.getTasksByCategory);

// Obter tarefas por prioridade
router.get('/priority/:priority', taskController.getTasksByPriority);

module.exports = router;
