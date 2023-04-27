const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('react_native', 'root', '', {
    host: 'localhost',
    dialect:  'mysql' 
  });

  sequelize.authenticate().then(function(){
    console.log("conexão realizada com sucesso com Sequelize");
  }).catch((err)=>{
    console.log("Error : conexão não realizada com sucesso com Sequelize :" + err);
  })

  module.exports = sequelize;
