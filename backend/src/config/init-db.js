const sequelize = require('./database');
const User = require('../models/user.model');

// Importar outros modelos quando forem criados
// const Habit = require('../models/habit.model');
// const Task = require('../models/task.model');
// const Challenge = require('../models/challenge.model');

const initDatabase = async () => {
  try {
    // Sincronizar todos os modelos com o banco de dados
    // Em ambiente de produção, usar { force: false }
    await sequelize.sync({ force: process.env.NODE_ENV === 'development' });
    
    console.log('Banco de dados sincronizado com sucesso');
    
    // Verificar se existem usuários
    const userCount = await User.count();
    
    // Se não houver usuários, criar um usuário de teste em ambiente de desenvolvimento
    if (userCount === 0 && process.env.NODE_ENV === 'development') {
      await User.create({
        username: 'usuario_teste',
        email: 'teste@kaizen.com',
        password: '$2a$10$ywfGH6ZiHRiKpY5QQ.VHmOzQzfXUwnYTEPmVJ/MhMJjTrOvhIRIAy', // senha: teste123
        level: 1,
        xp: 0
      });
      
      console.log('Usuário de teste criado com sucesso');
    }
    
    console.log('Inicialização do banco de dados concluída');
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
  }
};

module.exports = initDatabase;
