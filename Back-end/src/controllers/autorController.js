const autorRepository = require("../Repositories/autorRepository");
const autorService = require("../services/autorService");

async function createAutor(req,res){
  
    const { nome } = req.body;
    const response = await autorService.validateAutor(nome);

    return res.status(response.status).json(response.data);
}


module.exports = {
    createAutor,
}
