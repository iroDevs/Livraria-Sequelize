const Autor = require("../database/models/Autor");

async function createAutor(nome) {
        const response = await Autor.create({nome})
        
        return response;
}


module.exports = {
    createAutor,
}