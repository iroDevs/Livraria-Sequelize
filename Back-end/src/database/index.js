const Sequelize = require('sequelize');
const dbConfig = require('../config/databaseConfig');

const Autor = require('../models/Autor');
const Categoria = require('../models/Categoria');

const connection = new Sequelize(dbConfig);

Autor.init(connection);
Categoria.init(connection);

module.exports = connection;