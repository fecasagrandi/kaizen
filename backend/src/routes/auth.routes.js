const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/auth.controller');
const { autenticar } = require('../middlewares/auth.middleware');

// Rota de registro de usuário
router.post(
  '/registrar',
  [
    check('nome', 'O nome é obrigatório').not().isEmpty(),
    check('email', 'Por favor, inclua um e-mail válido').isEmail(),
    check('senha', 'A senha deve ter no mínimo 6 caracteres').isLength({ min: 6 })
  ],
  authController.registrar
);

// Rota de login
router.post(
  '/login',
  [
    check('email', 'Por favor, inclua um e-mail válido').isEmail(),
    check('senha', 'A senha é obrigatória').exists()
  ],
  authController.login
);

// Rota para obter perfil do usuário autenticado
router.get(
  '/perfil',
  autenticar,
  authController.obterPerfil
);

module.exports = router;
