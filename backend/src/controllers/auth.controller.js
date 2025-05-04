const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

// Registrar um novo usuário
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Email já está em uso' });
    }

    // Criptografar a senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Criar novo usuário
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
      level: 1,
      xp: 0,
      avatar: null
    });

    // Gerar tokens
    const token = generateToken(newUser);
    const refreshToken = generateRefreshToken(newUser);

    res.status(201).json({
      message: 'Usuário registrado com sucesso',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
        level: newUser.level,
        xp: newUser.xp
      },
      token,
      refreshToken
    });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário', error: error.message });
  }
};

// Login de usuário
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Verificar senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    // Gerar tokens
    const token = generateToken(user);
    const refreshToken = generateRefreshToken(user);

    res.status(200).json({
      message: 'Login realizado com sucesso',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        level: user.level,
        xp: user.xp
      },
      token,
      refreshToken
    });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ message: 'Erro ao fazer login', error: error.message });
  }
};

// Refresh token
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token não fornecido' });
    }

    // Verificar refresh token
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, async (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Refresh token inválido' });
      }

      // Obter usuário
      const user = await User.findByPk(decoded.id);
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }

      // Gerar novo token
      const newToken = generateToken(user);
      const newRefreshToken = generateRefreshToken(user);

      res.status(200).json({
        message: 'Token atualizado com sucesso',
        token: newToken,
        refreshToken: newRefreshToken
      });
    });
  } catch (error) {
    console.error('Erro ao atualizar token:', error);
    res.status(500).json({ message: 'Erro ao atualizar token', error: error.message });
  }
};

// Logout
exports.logout = async (req, res) => {
  // No backend, não é necessário invalidar o token JWT, pois são stateless
  // O cliente deve remover o token do armazenamento local
  res.status(200).json({ message: 'Logout realizado com sucesso' });
};

// Função para gerar token JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
};

// Função para gerar refresh token
const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d' }
  );
};
