const { Pool } = require("pg");
// @link: https://node-postgres.com/guides/project-structure
// @link: https://node-postgres.com/guides/async-express

const pool = new Pool({
  // configure database (* optional)
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
});

let count = 0;

pool.on("connect", (client) => {
  client.count = count++;
  console.log(`clients connected: ${count}`);
});

module.exports = {
  // query from pooled connection
  async query(text, params) {
    const start = Date.now(); // get starting time
    // connect to pool
    const client = await pool.connect();
    const res = await client.query(text, params);
    client.release();
    const duration = Date.now() - start; // get elapsed time

    // log results
    console.log("executed query", {
      /* text, params, */
      duration,
      rows: res.rowCount,
    });
    return res; // return results
  },
};
