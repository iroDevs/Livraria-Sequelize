const categorias = require('../../helpers/getCategoriesByTxt');
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriaData = categorias().map(autor => ({
      ...autor,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }));

    return queryInterface.bulkInsert('categorias', categoriaData, {});
  },
  down: async (queryInterface) => queryInterface.bulkDelete('categorias', null, {})
}
