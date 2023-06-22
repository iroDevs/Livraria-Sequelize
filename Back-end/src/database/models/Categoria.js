const { Model , DataTypes } = require('sequelize');

class Categoria extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Categoria;