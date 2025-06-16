const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'O nome é obrigatório'
      },
      len: {
        args: [3, 100],
        msg: 'O nome deve ter entre 3 e 100 caracteres'
      }
    }
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: {
      msg: 'Este e-mail já está em uso'
    },
    validate: {
      isEmail: {
        msg: 'Por favor, informe um e-mail válido'
      },
      notEmpty: {
        msg: 'O e-mail é obrigatório'
      }
    }
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'A senha é obrigatória'
      },
      len: {
        args: [6, 255],
        msg: 'A senha deve ter no mínimo 6 caracteres'
      }
    },
    set(value) {
      // Hash automático da senha antes de salvar
      if (value) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue('senha', hash);
      }
    }
  },
  xp: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: {
        args: [0],
        msg: 'O XP não pode ser negativo'
      }
    }
  },
  nivel: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    validate: {
      min: {
        args: [1],
        msg: 'O nível mínimo é 1'
      }
    }
  },
  dias_consecutivos: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: {
        args: [0],
        msg: 'Os dias consecutivos não podem ser negativos'
      }
    }
  },
  avatar: {
    type: DataTypes.TEXT,
    allowNull: true,
    validate: {
      isUrl: {
        msg: 'O avatar deve ser uma URL válida',
        args: {
          protocols: ['http', 'https'],
          require_protocol: true
        }
      }
    }
  },
  tema: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: 'claro',
    validate: {
      isIn: {
        args: [['claro', 'escuro', 'sistema']],
        msg: 'Tema inválido. Escolha entre claro, escuro ou sistema.'
      }
    }
  },
  ultimo_login: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'usuario',
  timestamps: true,
  underscored: true,
  defaultScope: {
    attributes: {
      exclude: ['senha', 'created_at', 'updated_at']
    }
  },
  scopes: {
    // Escopo para incluir a senha (usado apenas na autenticação)
    withPassword: {
      attributes: { include: ['senha'] }
    },
    // Escopo básico para listagem
    basico: {
      attributes: ['id', 'nome', 'email', 'nivel', 'xp', 'avatar', 'tema']
    }
  },
  hooks: {
    // Garantir que o email esteja em minúsculas
    beforeCreate: (usuario) => {
      if (usuario.email) {
        usuario.email = usuario.email.toLowerCase().trim();
      }
    },
    beforeUpdate: (usuario) => {
      if (usuario.changed('email') && usuario.email) {
        usuario.email = usuario.email.toLowerCase().trim();
      }
    }
  }
});

// Método para verificar a senha
Usuario.prototype.verificarSenha = async function(senha) {
  return bcrypt.compare(senha, this.senha);
};

// Método para obter dados públicos do usuário
Usuario.prototype.toJSON = function() {
  const values = { ...this.get() };
  delete values.senha;
  delete values.created_at;
  delete values.updated_at;
  return values;
};

module.exports = Usuario;
