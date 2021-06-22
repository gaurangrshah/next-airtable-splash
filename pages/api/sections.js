import { client, SECTIONS_QUERY } from "../../lib/pg";

export default async (req, res) => {
  await client.connect();
  const response = await client.query(SECTIONS_QUERY);
  await client.end();
  res.json(response);
};
