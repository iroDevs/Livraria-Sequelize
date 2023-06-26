const LivroRepository = require("../Repositories/livroRepository");

async function validateCreateLivro(livro,categorias){

    const LivroExists = await LivroRepository.getLivroByName(livro.titulo);

    if (LivroExists) {
        return {
            status: 401,
            erro: "o livro ja existe",
            data: LivroExists,
        }
    }

    const response = await LivroRepository.createLivro(livro,categorias);

    if (response) {
        return {
            status: 201,
            data: response,
        }
    } else {
        return {
            status: 501,
            data: response,
            erro: "algo deu errado no banco de dados",
        }
    }

}

async function validateUpdateLivro(id,livro,categorias){

     const response = await LivroRepository.updateLivro(id,livro,categorias);

     if (response) {
        return {
            status: 202,
            data: { message: "foi um sucesso a atualização", response,},
         }
    } else {
        return {
            status: 501,
            data:{message: "o livro n foi atualizado", response,},
            erro: "algo deu errado no banco de dados",
         }
    }

}




module.exports = {
    validateCreateLivro,
    validateUpdateLivro,
}