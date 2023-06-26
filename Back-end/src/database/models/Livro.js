const { Model , DataTypes } = require('sequelize');

class Livro extends Model {
    static init(sequelize) {
        super.init({
            titulo:DataTypes.STRING,
            preco:DataTypes.DECIMAL,
            descricao:DataTypes.STRING,
            estoque:DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'livros',
            freezeTableName: true
        })
    }
    static associate(models){
        this.belongsTo(models.Autor, { foreignKey: 'autor_id', as: 'escritor' });
        this.belongsToMany(models.Categoria, {foreignKey: 'livro_id', through: 'livro_categoria',as: 'categorias'});
    }
}
   /*
livro_id (chave primária)
título
autor_id (chave estrangeira referenciando a tabela "Autores")
categoria_id (chave estrangeira referenciando a tabela "Categorias")
preço
descrição
estoque
      */
module.exports = Livro;