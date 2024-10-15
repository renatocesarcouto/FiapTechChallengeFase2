const { Pool } = require('pg');

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const initializeDatabase = async () => {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        author VARCHAR(120) NOT NULL,
        date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        content TEXT NOT NULL
      )
    `);
    console.log('Banco de dados inicializado com sucesso!');
  } finally {
    client.release();
  }
};

module.exports = { pool, initializeDatabase };
