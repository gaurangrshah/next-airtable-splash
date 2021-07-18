const { Pool } = require("pg");
// @link: https://node-postgres.com/guides/project-structure
// @link: https://node-postgres.com/guides/async-express

const pool = new Pool({
  // configure database (* optional)
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.DB_NAME,
  idleTimeoutMillis: 0,
  min: 10,
  max: 20,
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
      /* text, params, */ duration,
      rows: res.rowCount,
    });
    return res; // return results
  },
};
