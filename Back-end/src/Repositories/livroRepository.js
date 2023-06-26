const { response } = require("express");
const Categoria = require("../database/models/Categoria");
const Livro = require("../database/models/Livro");

async function getLivroByName(titulo){
    const response = await Livro.findOne({where:{titulo}});
    return response;
}

async function createLivro(livroObjetc,categoriasArray) {
    

    const livro = await Livro.create(livroObjetc);

    categoriasArray.forEach( async (categoria_id) => {
        const categoria = await Categoria.findByPk(categoria_id);  

        await livro.addCategoria(categoria);
    });

  
    
   

    
    return livro; 
}




module.exports = {
getLivroByName,
createLivro,
}