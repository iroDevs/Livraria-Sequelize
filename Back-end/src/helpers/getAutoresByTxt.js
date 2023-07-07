const fs = require('fs');
const path = require('path');

function lerNomesDoArquivo(caminhoArquivo) {
  const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');
  const nomes = conteudo.split('\n');
  const arrayObjetos = nomes.map(nome => ({ nome: nome.trim() }));

  return arrayObjetos;
}

module.exports = function () {
  const caminhoArquivo = path.resolve(__dirname, 'documents', 'autores.txt');
  return lerNomesDoArquivo(caminhoArquivo);
};
