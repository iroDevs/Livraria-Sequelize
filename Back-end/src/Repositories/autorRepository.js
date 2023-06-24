const Autor = require("../database/models/Autor");


async function getAutorByName(nome){
    const response = await Autor.findOne({where:{nome}});

    return response;
}

async function createAutor(nome) {
        const response = await Autor.create({nome})
        return response; 
}


module.exports = {
    createAutor,
    getAutorByName,
}