const LivroRepository = require("../Repositories/livroRepository");

async function validateLivro(livro,categorias){

 const LivroExists = await LivroRepository.getLivroByName(livro.titulo);

 if (LivroExists) {
    return {
        status: 401,
        data: { erro: "Livro ja existe" }
    }
 }
 console.log("as categorias aqui",categorias);

 const response = await LivroRepository.createLivro(livro,categorias);


 return {
    status: 201,
    data: response,
 }

}


module.exports = {
    validateLivro,
}