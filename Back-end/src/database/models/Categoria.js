const { Model , DataTypes } = require('sequelize');

class Categoria extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'categorias',
            modelName:'Categoria',
            freezeTableName: true
            
        })
    }
    static associate(models){
        this.belongsToMany(models.Livro, { foreignKey: 'categoria_id', through: 'livro_categoria',as: 'livros'});
    }
}

module.exports = Categoria;