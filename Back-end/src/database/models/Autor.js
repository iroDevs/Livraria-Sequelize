const { Model , DataTypes } = require('sequelize');

class Autor extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'autores',
        })
    }
}

module.exports = Autor;