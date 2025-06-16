/**
 * Middleware para tratamento de erros
 * Captura erros lançados em rotas assíncronas e formata a resposta de erro
 */
const errorHandler = (err, req, res, next) => {
  console.error('Erro:', {
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : {},
    path: req.path,
    method: req.method
  });

  // Erro de validação do express-validator
  if (err.name === 'ValidationError' || err.name === 'SequelizeValidationError') {
    const errors = {};
    
    if (err.errors) {
      err.errors.forEach((error) => {
        errors[error.path] = error.message;
      });
    }
    
    return res.status(400).json({
      sucesso: false,
      mensagem: 'Erro de validação',
      erros: errors,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }

  // Erro de chave duplicada
  if (err.name === 'SequelizeUniqueConstraintError') {
    const field = err.errors[0].path;
    return res.status(409).json({
      sucesso: false,
      mensagem: `${field} já está em uso`,
      campo: field,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }

  // Erro de autenticação
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      sucesso: false,
      mensagem: 'Token inválido',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }

  // Erro de token expirado
  if (err.name === 'TokenExpiredError') {
    return res.status(401).json({
      sucesso: false,
      mensagem: 'Token expirado',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }

  // Erro 404 - Recurso não encontrado
  if (err.name === 'NotFoundError') {
    return res.status(404).json({
      sucesso: false,
      mensagem: err.message || 'Recurso não encontrado',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }

  // Erro de permissão
  if (err.name === 'ForbiddenError') {
    return res.status(403).json({
      sucesso: false,
      mensagem: err.message || 'Acesso negado',
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }

  // Erro genérico do servidor
  console.error('Erro interno do servidor:', err);
  res.status(500).json({
    sucesso: false,
    mensagem: 'Erro interno do servidor',
    erro: process.env.NODE_ENV === 'development' ? err.message : undefined,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

/**
 * Função para criar erros personalizados
 */
class AppError extends Error {
  constructor(message, statusCode, name = 'AppError') {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(message = 'Recurso não encontrado') {
    super(message, 404, 'NotFoundError');
  }
}

class ForbiddenError extends AppError {
  constructor(message = 'Acesso negado') {
    super(message, 403, 'ForbiddenError');
  }
}

class ValidationError extends AppError {
  constructor(message = 'Erro de validação', errors = {}) {
    super(message, 400, 'ValidationError');
    this.errors = errors;
  }
}

module.exports = {
  errorHandler,
  AppError,
  NotFoundError,
  ForbiddenError,
  ValidationError
};
