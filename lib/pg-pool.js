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
  // idleTimeoutMillis: 0,
  // min: 10,
  // max: 20,
});

let count = 0;

pool.on("connect", (client) => {
  client.count = count++;
  console.log(`clients connected: ${count}`);
});

// const pgPoolWrapper = {
//   async connect() {
//     for (let nRetry = 1; ; nRetry++) {
//       try {
//         const client = await pool.connect();
//         if (nRetry > 1) {
//           console.info("Now successfully connected to Postgres");
//         }
//         return client;
//       } catch (e) {
//         if (e.toString().includes("ECONNREFUSED") && nRetry < 5) {
//           console.info(
//             "ECONNREFUSED connecting to Postgres, " +
//               "maybe container is not ready yet, will retry " +
//               nRetry
//           );
//           // Wait 1 second
//           await new Promise((resolve) => setTimeout(resolve, 1000));
//         } else {
//           throw e;
//         }
//       }
//     }
//   },
// };

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
