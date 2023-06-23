# DB

## Criar DB
```bash
npx sequelize db:create 
```

# Migrations

## Criar migrations
```bash
npx sequelize migration:create --name=NOME_DA_MIGRATION
```
## Rodar migrations:

```bash
npx sequelize db:migrate
```

# Seeder

## Criar seeds
```bash
npx sequelize seed:generate --name=NOME_DA_SEEDER
```


## Rodar todas as seeds:
```bash
npx sequelize db:seed:all 
```


