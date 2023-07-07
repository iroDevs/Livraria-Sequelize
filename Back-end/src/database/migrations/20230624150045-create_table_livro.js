'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('livros', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull:false,
     },
     titulo: {
       type: Sequelize.STRING,
       allowNull:false,
     },
     autor_id:{
      type:Sequelize.INTEGER,
      allowNull: false,
      references: {model: 'autores',key: 'id'},
      onUpdate:'CASCADE',
      onDelete:'CASCADE',
     },
     preco:{
      type:Sequelize.DECIMAL,
      allowNull: false,
     },
     descricao: {
      type: Sequelize.STRING,
      allowNull: true,
     },
     estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
     },
     created_at: {
       type: Sequelize.DATE,
       allowNull:false,
     },
     updated_at: {
       type: Sequelize.DATE,
       allowNull:false,
     },
 
    });
   },
 
   async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('livros');
   }
 };
