const { Sequelize } = require('sequelize');
const db = require('../BancoDados/db');
const Cliente = db.define('Clientes',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
      },
      nome_completo: {
        type: Sequelize.STRING,
        allowNull: false,
        max:50
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        max:80
      },
      data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
        max:8
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        max:11,
        
      },
  });
  // Cliente.sync()
  module.exports = Cliente;