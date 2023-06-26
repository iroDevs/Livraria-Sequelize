const LivroService = require("../services/livroService")
const LivroRepository = require("../Repositories/livroRepository")

async function createLivro(req,res){
    const { categorias_id , autor_id,titulo , preco , estoque , descricao } = req.body;
    const newLivro = {
        autor_id,
        titulo,
        preco,
        estoque,
        descricao,
    }

    const response = await LivroService.validateCreateLivro(newLivro,categorias_id);
    return res.status(response.status).json(response);  
}

async function updateLivro(req,res){
    const { id } = req.params;
    const { categorias_id , autor_id,titulo , preco , estoque , descricao } = req.body;

    const newLivro = {
        autor_id,
        titulo,
        preco,
        estoque,
        descricao,
    }
    
    const response = await LivroService.validateUpdateLivro(id,newLivro,categorias_id);
    return res.status(response.status).json(response.data);
}

async function deleteLivro(req,res){
    const { id } = req.params;

    const response = await LivroRepository.deleteLivroById(id);

    if (response) {
        return res.status(200).json({sucess: "livro foi deletado" ,...response});
    }else {
        return res.status(500).json({erro: "algo deu errado ao deletar o livro", ...response})
    }
}

async function getLivroById(req,res){
    const { id } = req.params;

    const response = await LivroRepository.getLivroById(id);
    if (response) {
        return res.status(200).json({sucess:"retorno de todos os livros", data: response.dataValues}) 
    }

    return res.status(400).json({erro:"o livro n foi encontrado"});
}


async function getAllLivro(req,res){
    const response = await LivroRepository.getAllLivro();
    return response;
}



module.exports = {
    createLivro,
    updateLivro,
    deleteLivro,
    getLivroById,
    getAllLivro,
}