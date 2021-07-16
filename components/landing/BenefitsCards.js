import { Row } from "../Containers";
import { Card } from "./Card";
import styles from "../../styles/landing/Card.module.scss";

export function BenefitsCards({ data, render = renderBenefits }) {
  return (
    <>
      <Row className={styles.benefitsRow}>{data.map(render)}</Row>
    </>
  );
}

export function renderBenefits(benefit) {
  return <Card key={benefit.block.id} block={benefit.block} />;
}
