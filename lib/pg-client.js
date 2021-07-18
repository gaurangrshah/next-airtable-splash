const { Client } = require("pg");
// @link: https://github.com/brianc/node-postgres/commit/27450d07e6fb4eb0eb7a14754963c8bf9d2a3be9

function createClient() {
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
    port: process.env.DB_PORT,
  });
  return client;
}

module.exports = { createClient };
