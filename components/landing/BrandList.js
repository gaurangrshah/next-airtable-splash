import { Row } from "../Containers";

export function BrandList({ data, render }) {
  return (
    <>
      <h4 style={{ fontSize: "medium" }}>{data[0]?.block?.lead}</h4>
      <Row style={{ width: "80%", margin: "5em auto" }}>{data.map(render)}</Row>
    </>
  );
}
