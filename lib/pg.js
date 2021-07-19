const db = require("./pg-pool");

const { SECTIONS_QUERY } = require("./queries");

async function getSections() {
  // used for the Splash Page =>  airtable data
  try {
    // query database for sections and all related data.
    const res = await db.query(SECTIONS_QUERY);

    // handle success
    return res;
  } catch (err) {
    // handle errors
    console.error(err);
  }
}

module.exports = {
  getSections,
};
