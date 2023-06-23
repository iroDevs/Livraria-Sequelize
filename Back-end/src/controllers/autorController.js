const autorRepository = require("../Repositories/autorRepository");
const autorService = require("../services/autorService");

async function createAutor(req,res){

    const { nome } = req.body;

    const validName = autorService.validateName(nome);

    if (validName) {
    const response = await autorRepository.createAutor(nome);

     return res.status(200).json(response);
    
    }else {
      return res.status(401).json({erro: "The name is invalid."});
    }
}


module.exports = {
    createAutor,
}
