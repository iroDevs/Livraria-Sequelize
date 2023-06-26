
const Categoria = require("../database/models/Categoria");
const Livro = require("../database/models/Livro");


async function getLivroByName(titulo){
    const response = await Livro.findOne({where:{titulo}});
    return response;
}

async function getLivro(livro){
  const response = await Livro.findOne({where:{livro}});
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

  async function getLivroById(id){
    const response = await Livro.findByPk(id);
    return response;
  }  

  async function updateLivro(id,livroObjetc,categorias) {

    const livro = await Livro.update(livroObjetc,{where: {id}}); 
    return livro;
  }

  async function deleteLivroById(id) {
    const response = await Livro.destroy({
      where: {
        id,
      }
    });

    return response;
  }

  async function getAllLivro(){
    const response = await Livro.findAll();

    return response;
  }


module.exports = {
getLivroByName,
createLivro,
getLivroById,
getLivro,
getAllLivro,
updateLivro,
deleteLivroById,
}