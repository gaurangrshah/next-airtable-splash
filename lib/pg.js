const db = require("./pg-pool");
const { SECTIONS_QUERY, PAGES_QUERY, GET_PAGE_QUERY } = require("./queries");

async function getSections() {
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

async function getPages() {
  try {
    // query database for sections and all related data.
    const res = await db.query(PAGES_QUERY);

    // handle success
    return res;
  } catch (err) {
    // handle errors
    console.error(err);
  }
}

async function getPage(page) {
  try {
    return db.query(GET_PAGE_QUERY, ["landing"]);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  getSections,
  getPages,
  getPage,
};
