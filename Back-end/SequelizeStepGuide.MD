# Libs

```bash
npm install sequelize sequelize-cli
```
# Escolha o SGBD:
- npm install --save pg pg-hstore # Postgres
- npm install --save mysql2
- npm install --save mariadb
- npm install --save sqlite3
- npm install --save tedious # Microsoft SQL Server
- npm install --save oracledb # Oracle Database

# Configurações:

- Crie um arquivo chamado .sequelizerc na area de trabalho e converta ele para js usando o canto inferior do vscode
- Dentro desse aquivo coloque as configurações de path entre outros do seu sequelize desse projeto exemplo:

```js
const path = require("path");

module.exports = {
    config: path.resolve(__dirname,"src","config","databaseConfig.js"),
    'migrations-path': path.resolve(__dirname,"src","database","migrations"),
    'seeders-path': path.resolve(__dirname,"src","database","seeders"),
}
```

> nesse projeto eu tinha uma pasta src onde eu guardava toda estrutura do projeto
> dentro da src tinha uma database onde guardava duas pastas importantes migrations , seeders e models
> estou apenas especificando que quero que os arquivos gerados pelo sequelize-cli sejam armazenados nas determinadas pastas. (seeders-path e migrations-path)

## CONFIGURAÇÕES DO BANCO

> crie uma pasta chamada config dentro dela um arquivo chamado databaseConfig.js
exemplo: 
```js
module.exports = {
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
        timestamps:true,
        underscored:true,
    }
};
```
> cada chave dessa pode vim de um .env personalizado para cada ambiente
exemplo ambiente teste:

DIALECT="postgres"
HOST="localhost"
USER="postgres"
PASSWORD="Senha123"
DATABASE="ExemploDB"

# estruturas principais 

- MIGRATIONS: é um histórico de criaçõa, alteração e exclusão de tabelas
- MODELS: é uma classe que representa uma entidade do banco de dados
- SEEDERS: é uma forma de semear o banco de dados com informações simuladas para que ele não comece vazio

## MIGRATIONS exemple:



## Models exemple:

Autor.js  ( representando uma tabela chamada autores no bd)

```js
const { Model , DataTypes } = require('sequelize');

class Autor extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'autores',
        })
    }
}

module.exports = Autor;
```


## SEDERS exemple:


```js

const autores = require('../../helpers/getAutoresByTxt');
const moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const autoresData = autores().map(autor => ({
      ...autor,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }));

    return queryInterface.bulkInsert('autores', autoresData, {});
  },
  down: async (queryInterface) => queryInterface.bulkDelete('autores', null, {})
}

```

# Coneçao com o Banco de dados

Dentro da pasta database vc pode criar um arquivo chamado index ou connection.js para colocar sua conexão com o database

exemple:

```js
const Sequelize = require('sequelize');
const dbConfig = require('../config/databaseConfig');

//Colocar os modelos para se conectar ao banco
const Autor = require('./models/Autor');
const Categoria = require('./models/Categoria');

//Cria a conexao com o banco chamando o sequelize e passando as configurações criadas anteriomente
const connection = new Sequelize(dbConfig);

//Conectar os modelos com suas respectivas tabelas
Autor.init(connection);
Categoria.init(connection);

module.exports = connection;

```

**Essa Conexão deve ser chamada no app.js ou server.js ou seja quando sua aplicação inciar deve ser intanciado esse arquivo**

Para fazer isso basta passar um __require("caminho_para_arquivo_de_conexao");__

### Utilidades

agora seus modelos passam a ter acesso ao banco e a modificalos , basta chamar seus modelos e alteralos com seus metodos do sequelize que irá funcionar
