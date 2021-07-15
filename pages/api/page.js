import { getPage } from "../../lib/pg";


export default async function (req, res) {
  const response = await getPage("landing");
  res.status(200).json(response.rows);
}
