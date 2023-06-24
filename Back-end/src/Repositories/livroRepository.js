async function getLivroByName(nome){
    const response = await Autor.findOne({where:{nome}});
    return response;
}

async function createLivro(nome) {
    const response = await Autor.create({nome})
    return response; 
}


module.exports = {
getLivroByName,
createLivro,
}