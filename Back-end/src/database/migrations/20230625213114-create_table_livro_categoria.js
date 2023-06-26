'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('livro_categoria', {
     id: {
       type: Sequelize.INTEGER,
       primaryKey: true,
       autoIncrement: true,
       allowNull:false,
     },
     categoria_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "categorias" , key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     },
     livro_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "livros" , key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
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
    return queryInterface.dropTable('livro_categoria');
   }
 };
