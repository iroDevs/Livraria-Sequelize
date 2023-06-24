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
        })
    }
    static associate(models){
        this.belongsTo(models.Autor, { foreignKey: 'autor_id', as: 'escritor' });
        this.belongsToMany(models.Categoria, { foreignKey: 'categoria_id', as:"genero"});
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