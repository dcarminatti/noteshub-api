# Notes API

Uma API para cadastro de notas, incluindo o uso de tags, links, além da criação de usuários. Tudo sendo armazenado num banco de dados, utilizando knex e sqlite.

## Recursos

#### 1. Notes

Uma saída para criação de notas, com os métodos de demonstração de uma nota específica, uma lista contando todas as notas, criação de uma nova nota e de deletar uma nota existente.

```
/notes
```

##### Métodos:
- **get**: para recuperar todas as notas do usuário, porém é possível recuperar uma única nota passando um query params na requisição
  - Necessário um Bearer Token gerado pelo método /sessions
- **post**: para criar uma nova nota no banco de dados
  - Necessário um Bearer Token gerado pelo método /sessions
- **delete**: para deletar uma nota, o id da nota tem que ser passado como um query params
  - Necessário um Bearer Token gerado pelo método /sessions

#### 2. Tags

Uma saída para listagem de tags, com um método que retorna uma lista com as tags existentes no banco de dados

```
/tags
```

##### Métodos:
- **get**: para recuperar todas as tags criadas pelo usuário
  - Necessário um Bearer Token gerado pelo método /sessions

#### 3. Users

Uma saída para criação de usuários, com os métodos de criação de um novo usuário e de atualizar os dados de um usuário existente

```
/users
```

##### Métodos:
- **putch**: para adicionar um avatar para o usuário
    - Necessário um Bearer Token gerado pelo método /sessions
- **post**: para cadastrar um novo usuário no banco de dados
- **put**: para deletar uma nota, o id da nota tem que ser passado como um query params
    - Necessário um Bearer Token gerado pelo método /sessions

#### 4. Sessions

```
/sessions
```

##### Métodos:
- **post**: cria um Bearer Token para validar o usuário


#### 5. Files

```
/files
```

##### Métodos:
- **get**: recupera o avatar de um usuário

## Como usar

#### 1.Baixar o repositório na sua máquina ou servidor

```
https://github.com/dcarminatti/notes-api.git
```

#### 2. Instalar as depêndencias
```
npm install
```

#### 3. Adicionar as variáveis de ambiente
- Crie um arquivo `.env`
- Depois pegue as propriedade no arquivo `.env.example`que se encontra no projeto

#### 4. Rode os seguintes comandos

- Para criar as tabelas no banco de dados

```
npm run migrate
```

- Para rodar o servidor no modo desenvolvimento

```
npm run dev
```
