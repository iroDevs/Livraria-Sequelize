const LivroService = require("../services/livroService")

async function createLivro(req,res){

const { categorias_id , autor_id,titulo , preco , estoque , descricao } = req.body;

const newLivro = {
    autor_id,
    titulo,
    preco,
    estoque,
    descricao,
}

 const response = await LivroService.validateLivro(newLivro,categorias_id);

 if (response) {
    return res.status(response.status).json(response);
 }

 return res.status(500).json({erro: "deu algo errado no banco de dados"});
}



module.exports = {
    createLivro,
}