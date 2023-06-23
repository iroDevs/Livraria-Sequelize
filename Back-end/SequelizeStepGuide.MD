# Libs

```bash
npm install sequelize sequelize-cli
```
# Escolha o SGBD:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
$ npm install --save oracledb # Oracle Database

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

> nesse projeto e tinha uma pasta src onde ue guardava todo projeto
> dentro da src tinha uma database onde guardava duas pastas importantes migrations e seeders
> estou apenas especificando que quero que os arquivos gerados pelo sequelize-cli sejam armazenados nas determinadas pastas.

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

# estruturas principais 

- MIGRATIONS: é um histórico de criaçõa, alteração e exclusão de tabelas
- MODELS: é uma classe que representa uma entidade do banco de dados
- SEEDERS: é uma forma de semear o banco de dados com informações simuladas para que ele não comece vazio