const Sequelize = require('sequelize');
const dbConfig = require('../config/databaseConfig');

const Autor = require('./models/Autor');
const Categoria = require('./models/Categoria');
const Livro = require('./models/Livro');

const connection = new Sequelize(dbConfig);

Autor.init(connection);
Categoria.init(connection);
Livro.init(connection);

Livro.associate(connection.models);
Autor.associate(connection.models);
Categoria.associate(connection.models);

module.exports = connection;