const autorRepository = require("../Repositories/autorRepository");
const autorService = require("../services/autorService");

async function createAutor(req,res){
  
    const { nome } = req.body;
    const response = await autorService.validateAutor(nome);

    return res.status(response.status).json(response.data);
}

async function getAllAutores(req, res){
    const response = await autorRepository.getAllAutores();

    if (response) {
        return res.status(200).json(response);
    }else{
        return res.status(500).json({erro: "algo deu errado em nosso banco de dados"});
    }
}


module.exports = {
    createAutor,
    getAllAutores,
}
