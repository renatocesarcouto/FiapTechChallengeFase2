const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsing de JSON no corpo das requisições
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importação das rotas de posts
const postsRouter = require('./routes/routes');

// Uso das rotas de posts com o prefixo '/posts'
app.use('/posts', postsRouter);

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// Teste básico do servidor
app.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send('Erro ao conectar ao banco de dados');
  }
});