const { Client } = require("pg");

const SECTIONS_QUERY = `SELECT
      p.id AS page_id,
      p.title AS page_title,
      p.path AS page_path,
      p.order_ AS page_order,
      p.sectionid As page_sections_id,
      p.seoid AS page_seo_id,
      s.id AS section_id,
      s.title AS section_title,
      s.order_ AS section_order,
      s.type AS section_type,
      s.filter AS section_filter,
      s.blockid AS section_block_id,
      s.pageid AS section_page_id,
      b.id AS block_id,
      b.title AS block_title,
      b.lead AS block_lead,
      b.excerpt AS block_excerpt,
      b.content AS block_content,
      b.mediaid AS block_media_id,
      b.sectionid AS block_section_id,
      m.id AS media_id,
      m.title AS media_title,
      m.url AS media_url,
      m.alt AS media_alt,
      m.blockid AS media_block_id,
      m.seoid AS media_seo_id,
      seo.id AS seo_id,
      seo.title AS seo_title,
      seo.description AS seo_description,
      seo.keywords AS seo_keywords,
      seo.sitename AS seo_sitename,
      seo.url AS seo_url,
      seo.mediaid AS seo_media_id,
      seo.pageid AS seo_page_id
    FROM
      pages AS p
      LEFT JOIN seo ON seo.id = ANY (p.seoid)
      LEFT JOIN sections AS s ON s.id = ANY (p.sectionid)
      LEFT JOIN blocks AS b ON b.id = ANY (s.blockid)
      LEFT JOIN media AS m ON m.id = ANY (b.mediaid)
      ORDER BY p.id ASC, s.order_ ASC
    `;

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

    // handle success
    // console.log("res--", res);
    await client.end(); // close connection to db
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
