const { Pool } = require("pg");
// @link: https://node-postgres.com/guides/project-structure
// @link: https://node-postgres.com/guides/async-express

const pool = new Pool({
  // configure database (* optional)
  database: process.env.DB_NAME,
});

module.exports = {
  // query from pooled connection
  async query(text, params) {
    const start = Date.now(); // get starting time
    const res = await pool.query(text, params); // execute query
    const duration = Date.now() - start; // get elapsed time

    // log results
    console.log("executed query", {
      /* text, params, */ duration,
      rows: res.rowCount,
    });
    return res; // return results
  },
};
