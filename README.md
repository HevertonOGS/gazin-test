# Gazin (Teste)

## Visão geral

API HTTP de gerenciamento de desenvolvedores desenvolvida em NodeJS e com Express.js (Typescript). Além da API, o projeto contém um CRUD (cadastro, listagem, edição e exclusão) de informações de desenvolvedores

## Configurações do projeto

#### Antes

1. Baixe ou clone o repositório para uma máquina local.
2. Abra o diretório `backend` do projeto e copie `.env.example` para `.env`.

#### Instale as dependências

1. Acesse o diretório `backend` e rode `yarn install`
2. Acesse o diretório `frontend` e rode `yarn install`

#### Configuração do Docker e do banco de dados (backend)

O projeto utilizar um *Docker container* que roda um banco de dados PostgreSQL (O banco de dados pode ser utilizado sem a imagem do Docker). Para utilizar a imagem execute:

`docker run --name gazin_test -e POSTGRES_PASSWORD=<SUA-SENHA-DO-BANCO-AQUI> -p 5432:5432 -d postgres`

Crie um banco de dados com o nome `user_management`.

No diretório raiz do projeto altere o arquivo `ormconfig.example.json` para `ormconfig.json` e informe as credenciais do seu banco de dados (host, porta, usuário, senha e nome do banco de dados). Depois disso e ainda no diretório raiz, execute o comando abaixo para criar as tabelas de banco de dados:

`yarn typeorm migration:run`

#### Executar o projeto em ambiente de desenvolvimento (backend)

`yarn dev:server`

#### Executar o projeto em ambiente de desenvolvimento (frontend)

`yarn start`

## Principais tecnologias

- Node.js;
- Express.js;
- React.js;
- Typescript;
- Jest;

## Uso

#### Usuário

- Para utilizar a API é preciso primeiramente criar um desenvolvedor com as seguintes informações:

  - [POST] `<url>/developers` - (exemplo de corpo da requisição no formato JSON):

    ```
    {
    	"name": "Héverton Oliveira",
      "sex": "M",
      "age": 23,
      "hobby": "Curtir um Rock",
      "birth_date": "1998-09-21"
    }
    ```

- Para ver a lista de desenvolvedores:

  - [GET] `<url>/developers` (exemplo de corpo da requisição no formato JSON):

- Para ver as informações de um desenvolvedor:

  - [GET] `<url>/developers/:id` (exemplo de corpo da requisição no formato JSON):

- Para atualizar os dados:

  - [PUT] `<url>/developers/:id` (exemplo de corpo da requisição no formato JSON):

    ```
    {
      "name": "Héverton Oliveira",
      "sex": "M",
      "age": 35,
      "hobby": "Correr e ler",
      "birth_day": "1986-09-21"
    }
    ```

- Para excluir um desenvolvedor específico:
  - [DELETE] `<url>/developers/:id`

## Comandos úteis

#### Executar testes

`yarn test`

#### Executar TypeORM

`yarn typeorm <commands>`
