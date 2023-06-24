const autorRepository = require("../Repositories/autorRepository");


async function validateAutor (nome) {
    
    if (nome.length > 200) {
        return {
            status:401,
            data: {
                message: "Nome é muito grande para ser inserido em noso BD ( capacidade maxima 200 letras)"
            }
        };
    }

    const autorExists = await autorRepository.getAutorByName(nome);

    if(autorExists){
        return {
            status:401,
            data: {
                message: "Nome já existe na nossa base de dados"
            }
        }
    }
    
   let response = await autorRepository.createAutor(nome);

    return {
        status:201,
        data: response,       
    }
}



module.exports = {
validateAutor,
}