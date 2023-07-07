const autores = require('../../helpers/getAutoresByTxt');
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const autoresData = autores().map(autor => ({
      ...autor,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }));

    return queryInterface.bulkInsert('autores', autoresData, {});
  },
  down: async (queryInterface) => queryInterface.bulkDelete('autores', null, {})
}
