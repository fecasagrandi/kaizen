const User = require('../models/user.model');

// Obter perfil do usuário
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const user = await User.findByPk(userId, {
      attributes: { exclude: ['password'] }
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    res.status(200).json({ user });
  } catch (error) {
    console.error('Erro ao obter perfil do usuário:', error);
    res.status(500).json({ message: 'Erro ao obter perfil do usuário', error: error.message });
  }
};

// Atualizar perfil do usuário
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { username, avatar } = req.body;
    
    const user = await User.findByPk(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    // Atualizar campos
    if (username) user.username = username;
    if (avatar) user.avatar = avatar;
    
    await user.save();
    
    res.status(200).json({
      message: 'Perfil atualizado com sucesso',
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        level: user.level,
        xp: user.xp,
        avatar: user.avatar
      }
    });
  } catch (error) {
    console.error('Erro ao atualizar perfil do usuário:', error);
    res.status(500).json({ message: 'Erro ao atualizar perfil do usuário', error: error.message });
  }
};

// Obter estatísticas do usuário
exports.getStats = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Aqui seria implementada a lógica para buscar estatísticas do usuário
    // como número de hábitos, tarefas concluídas, streak, etc.
    
    // Exemplo de resposta simulada
    const stats = {
      habitsCompleted: 25,
      tasksCompleted: 42,
      currentStreak: 7,
      longestStreak: 14,
      challengesCompleted: 3
    };
    
    res.status(200).json({ stats });
  } catch (error) {
    console.error('Erro ao obter estatísticas do usuário:', error);
    res.status(500).json({ message: 'Erro ao obter estatísticas do usuário', error: error.message });
  }
};

// Obter progresso do usuário
exports.getProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Aqui seria implementada a lógica para buscar o progresso do usuário
    // em diferentes áreas, como hábitos, tarefas, desafios, etc.
    
    // Exemplo de resposta simulada
    const progress = {
      habits: {
        total: 10,
        completed: 7,
        percentage: 70
      },
      tasks: {
        total: 15,
        completed: 12,
        percentage: 80
      },
      challenges: {
        total: 5,
        completed: 2,
        percentage: 40
      }
    };
    
    res.status(200).json({ progress });
  } catch (error) {
    console.error('Erro ao obter progresso do usuário:', error);
    res.status(500).json({ message: 'Erro ao obter progresso do usuário', error: error.message });
  }
};

// Obter nível e XP do usuário
exports.getLevel = async (req, res) => {
  try {
    const userId = req.user.id;
    
    const user = await User.findByPk(userId, {
      attributes: ['level', 'xp']
    });
    
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
    
    // Calcular XP necessário para o próximo nível (exemplo de fórmula)
    const xpForNextLevel = user.level * 100;
    const xpProgress = (user.xp / xpForNextLevel) * 100;
    
    res.status(200).json({
      level: user.level,
      xp: user.xp,
      xpForNextLevel,
      xpProgress
    });
  } catch (error) {
    console.error('Erro ao obter nível e XP do usuário:', error);
    res.status(500).json({ message: 'Erro ao obter nível e XP do usuário', error: error.message });
  }
};
