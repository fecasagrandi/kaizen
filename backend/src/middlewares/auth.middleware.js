const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

// Middleware para verificar o token JWT
exports.autenticar = async (req, res, next) => {
  try {
    // Obter o token do cabeçalho Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Token de autenticação não fornecido ou em formato inválido. Use o formato: Bearer <token>'
      });
    }

    const token = authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Token de autenticação não fornecido'
      });
    }

    // Verificar e decodificar o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Buscar o usuário no banco de dados
    const usuario = await Usuario.findByPk(decoded.id);
    
    if (!usuario) {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Usuário não encontrado para este token'
      });
    }

    // Adicionar o usuário ao objeto de requisição para uso posterior
    req.usuario = usuario;
    next();
    
  } catch (error) {
    console.error('Erro na autenticação:', error);
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Token inválido'
      });
    }
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Token expirado. Faça login novamente.'
      });
    }
    
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro na autenticação',
      erro: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Middleware para verificar permissões de administrador
exports.ehAdmin = (req, res, next) => {
  // Verifica se o usuário está autenticado e é administrador
  if (!req.usuario || req.usuario.nivel < 10) { // Ajuste o nível conforme necessário
    return res.status(403).json({
      sucesso: false,
      mensagem: 'Acesso negado. Permissão de administrador necessária.'
    });
  }
  next();
};
