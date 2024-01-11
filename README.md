# Notes API

Uma API para cadastro de notas, incluindo o uso de tags, links, além da criação de usuários. Tudo sendo armazenado num banco de dados, utilizando knex e sqlite.

## Recursos

### 1. Notes

Uma saída para criação de notas, com os métodos de demonstração de uma nota específica, uma lista contando todas as notas, criação de uma nova nota e de deletar uma nota existente.

```
/notes
```

### 2. Tags

Uma saída para listagem de tags, com um método que retorna uma lista com as tags existentes no banco de dados

```
/tags
```

### 3. Users

Uma saída para criação de usuários, com os métodos de criação de um novo usuário e de atualizar os dados de um usuário existente

```
/users
```
