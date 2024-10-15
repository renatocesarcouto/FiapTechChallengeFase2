# FiapTechChallengeFase2

Arquitetura e Uso da Aplicação - API para plataforma de blog do Tech Challenge Fase 2

1 Visão Geral
A API para plataforma de blog do Tech Challenge Fase 2 é uma aplicação backend desenvolvida em Node.js para permitir que professores da rede pública de educação postem e gerenciem conteúdo educacional online.

2 Tecnologias Utilizadas

Backend: Node.js com Express.js
Banco de Dados: PostgreSQL
Containerização: Docker
Testes: Jest

2 Arquitetura do Sistema

O projeto segue uma arquitetura MVC (Model-View-Controller), adaptada para uma API REST:
    app.js: Arquivo principal da aplicação
    /models: Contém o modelo Post.js
    /routes: Gerencia as rotas da API
    /tests: Contém os testes unitários
    Dockerfile: Configuração para containerização
    docker-compose.yml: Orquestra os containers da aplicação e do banco de dados

3 Banco de Dados
Estrutura da Tabela Tabela 'posts':
    id: integer (chave primária, auto-incremento)
    title: string(150) (não nulo)
    author: string(120) (não nulo)
    date: datetime (não nulo)
    content: text (não nulo)

4 Endpoints da API
    GET /posts: Lista todos os posts para alunos
    GET /posts/admin: Lista todos os posts para professores
    GET /posts/search: Busca posts por termo
    GET /posts/:id: Retorna um post específico
    POST /posts: Cria um novo post
    PUT /posts/:id: Atualiza um post existente
    DELETE /posts/:id: Remove um post

5 Inicialização
Use o comando docker-compose up para iniciar a aplicação e o banco de dados.

6 Testes
Execute docker-compose run test para rodar os testes unitários.
