require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth.routes');
const { errorHandler } = require('./middlewares/error.middleware');

// Inicializar o aplicativo Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use('/api/auth', authRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API do Kaizen!' });
});

// Rota 404
app.use((req, res) => {
  res.status(404).json({
    sucesso: false,
    mensagem: 'Rota não encontrada',
    metodo: req.method,
    path: req.path
  });
});

// Middleware de tratamento de erros
app.use(errorHandler);

// Sincronizar banco de dados e iniciar o servidor
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    // Testar a conexão com o banco de dados
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    
    // Sincronizar modelos com o banco de dados (criar tabelas se não existirem)
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados com o banco de dados.');
    
    // Iniciar o servidor
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
      console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
    });
    
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
    process.exit(1);
  }
};

// Iniciar o servidor
startServer();

// Lidar com encerramento gracioso
process.on('SIGINT', async () => {
  console.log('\nEncerrando o servidor...');
  await sequelize.close();
  console.log('Conexão com o banco de dados encerrada.');
  process.exit(0);
});

module.exports = app;
