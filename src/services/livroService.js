const { response } = require("express");
const LivroRepository = require("../Repositories/livroRepository");
const Factory = require('../factory/Factory')
const { Op } = require('sequelize')
const Categoria = require( '../database/models/Categoria')

async function validateCreateLivro(livro,categorias){

    const LivroExists = await LivroRepository.getLivroByName(livro.titulo);

    if (LivroExists) {
        return {
            status: 401,
            erro: "o livro ja existe",
            data: LivroExists,
        }
    }

    const response = await LivroRepository.createLivro(livro,categorias);

    if (response) {
        return {
            status: 201,
            data: response,
        }
    } else {
        return {
            status: 501,
            data: response,
            erro: "algo deu errado no banco de dados",
        }
    }

}

async function validateUpdateLivro(id,livro,categorias){

     const response = await LivroRepository.updateLivro(id,livro,categorias);

     if (response) {
        return {
            status: 202,
            data: { message: "foi um sucesso a atualização", response,},
         }
    } else {
        return {
            status: 501,
            data:{message: "o livro n foi atualizado", response,},
            erro: "algo deu errado no banco de dados",
         }
    }

}
/*  return {
        nomeCotem,
        precoMax,
        minEstoque,
        idsCategoria,
        categorias,
    }
    
    */
function queryMakerByFilters(filters) {
    const retorno = {
        where: {
            [Op.and]: [
                { titulo: { [Op.startsWith]: filters.nomeCotem } },
                { preco: { [Op.lte]: filters.precoMax } },
                { estoque: { [Op.lte]: filters.minEstoque } }
            ]
        }
    };
      console.log(filters);
    if (filters.categorias && filters.categorias.length > 0) {
        retorno.include = [
        {
            model: Categoria,
            as: 'categorias',
                where: {
                    id: { [Op.in]: filters.categorias }
            },
            attributes: ['id', 'nome'] 
        }
        ];
    }
      
    return retorno;
}
      
      

async function getAllLivroWithFilters(filters) {
    try {
        const query = queryMakerByFilters(filters);
        const SequelizeResponse = await LivroRepository.getAllLivroWithFilters(query);
        const response = Factory.createResponseApi(200, SequelizeResponse);
        
        return response
    } catch (error) {
        console.log(error);
        const response = Factory.createResponseApi(500, error);
        return response
    }


}




module.exports = {
    validateCreateLivro,
    validateUpdateLivro,
    getAllLivroWithFilters,
}