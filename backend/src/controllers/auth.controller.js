const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
const bcrypt = require('bcryptjs');

// Gerar token JWT
const generateToken = (usuario) => {
  return jwt.sign(
    { id: usuario.id, email: usuario.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

// Registrar novo usuário
exports.registrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Verificar se o usuário já existe
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ 
        sucesso: false,
        mensagem: 'Este e-mail já está em uso.' 
      });
    }

    // Criar novo usuário (a senha é hasheada automaticamente pelo modelo)
    const novoUsuario = await Usuario.create({
      nome,
      email,
      senha,
      nivel: 1,
      xp: 0,
      dias_consecutivos: 0
    });

    // Gerar token JWT
    const token = generateToken(novoUsuario);

    // Retornar dados do usuário (sem a senha) e o token
    const { senha: _, ...usuarioSemSenha } = novoUsuario.toJSON();
    
    res.status(201).json({
      sucesso: true,
      dados: {
        usuario: usuarioSemSenha,
        token
      },
      mensagem: 'Usuário registrado com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao processar o registro',
      erro: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Login do usuário
exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verificar se o usuário existe
    const usuario = await Usuario.scope('withPassword').findOne({ 
      where: { email } 
    });

    if (!usuario) {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Credenciais inválidas'
      });
    }

    // Verificar a senha
    const senhaValida = await usuario.verificarSenha(senha);
    if (!senhaValida) {
      return res.status(401).json({
        sucesso: false,
        mensagem: 'Credenciais inválidas'
      });
    }

    // Atualizar último login
    usuario.ultimo_login = new Date();
    await usuario.save();

    // Gerar token JWT
    const token = generateToken(usuario);

    // Retornar dados do usuário (sem a senha) e o token
    const { senha: _, ...usuarioSemSenha } = usuario.toJSON();

    res.json({
      sucesso: true,
      dados: {
        usuario: usuarioSemSenha,
        token
      },
      mensagem: 'Login realizado com sucesso!'
    });

  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao processar o login',
      erro: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Obter perfil do usuário autenticado
exports.obterPerfil = async (req, res) => {
  try {
    // O usuário já está disponível em req.usuario (definido pelo middleware de autenticação)
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: { exclude: ['senha'] }
    });

    if (!usuario) {
      return res.status(404).json({
        sucesso: false,
        mensagem: 'Usuário não encontrado'
      });
    }

    res.json({
      sucesso: true,
      dados: { usuario }
    });
    
  } catch (error) {
    console.error('Erro ao obter perfil:', error);
    res.status(500).json({
      sucesso: false,
      mensagem: 'Erro ao obter perfil do usuário',
      erro: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};
