const Airtable = require("airtable");
const { getMinifiedRecords, minifyRecord } = require("../utils/airtable");

// airtable queries are based on "views"
export const VIEW = "Grid view";

// instantiate airtable
export const table = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
});

// create reference to airtable base
export const base = table.base(process.env.AIRTABLE_BASE_ID);

// Airtable query helpers
export const getPage = async (
  page = "launch",
  table = "pages",
  options = { view: VIEW }
) => {
  const filterByFormula = `AND(title='${page}')`;
  const records = await base(table)
    .select({ filterByFormula, ...options })
    .all();
  return getMinifiedRecords(records);
};

export const getRecordById = async (table, id) => {
  const record = await base(table).find(id);
  return minifyRecord(record);
};

export const getRelatedRecords = async (table, ids = []) => {
  const records = await ids.map(async (id) => {
    const record = await getRecordById(table, id);
    return record;
  });
  return Promise.all(records);
};
