import { Row } from "../Containers";

export function BenefitsCards({ data, render }) {
  return (
    <Row style={{ margin: "6em auto", alignItems: "stretch" }}>
      {data.map(render)}
    </Row>
  );
}
