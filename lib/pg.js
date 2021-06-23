const { Client } = require("pg");
import { SECTIONS_QUERY } from "./queries";

// create client instance
const client = new Client({
  user: process.env["DB_USER"],
  host: process.env["DB_HOST"],
  database: process.env["DB_NAME"],
  password: process.env["DB_PW"],
  port: process.env["DB_PORT"],
});

async function getSections() {
  try {
    await client.connect(); // connect to db

    // query database for sections and all related data.
    const res = await client.query(SECTIONS_QUERY);
    console.log("🚀 ~ file: pg.js ~ line 19 ~ getSections ~ res", res);

    // handle success
    // console.log("res--", res);
    await client.end(); // close connection to db

    return res;
  } catch (err) {
    // handle errors
    console.error(err);
  }
}

module.exports = {
  client,
  getSections,
  SECTIONS_QUERY,
};
