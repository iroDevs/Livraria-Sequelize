
function createLivro({autor_id,titulo,preco,estoque,descricao}) {
    return  {
        autor_id,
        titulo,
        preco,
        estoque,
        descricao,
    }
}

function createFilter({nomeCotem , precoMax ,minEstoque,categorias}){
    return {
        nomeCotem,
        precoMax,
        minEstoque,
        categorias,
    }
}

function createResponseApi(status,data){
    return {
        status,
        data,
    }
}

module.exports = {
    createLivro,
    createFilter,
    createResponseApi
}