async function createLivro(req,res){
const { autor_id , categoria_id} = req.params;
const { titulo , preco , estoque , descricao } = req.body;

   
}



module.exports = {
    createLivro,
}