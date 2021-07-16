import { Row } from "../Containers";
import { Card } from "./Card";
import styles from "../../styles/landing/Card.module.scss";
import { SectionHeading } from "./SectionHeading";

export function BenefitsCards({ headingBlock, data, render = renderBenefits }) {
  return (
    <SectionHeading
      title={headingBlock.title}
      excerpt={headingBlock.excerpt}
      align='center'
    >
      <Row className={styles.benefitsRow}>{data.map(render)}</Row>
    </SectionHeading>
  );
}

export function renderBenefits(benefit) {
  return <Card key={benefit.block.id} block={benefit.block} />;
}
