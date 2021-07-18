const db = require("./pg-pool");
const { SECTIONS_QUERY, GET_PAGE_QUERY } = require("./queries");

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

async function getPage(page = "landing") {
  // used for the Landing Page =>  airtable data
  try {
    // query database uwing query argument: page
    // lists all records related to a specific page
    return db.query(GET_PAGE_QUERY, [page]);

    // handle success
  } catch (err) {
    console.error(`🔵 🔵 🔵 testing deploy, ${err}`);
  }
}

module.exports = {
  getSections,
  getPage,
};
