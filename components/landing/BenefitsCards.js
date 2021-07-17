import { Container, Row } from "../Containers";
import { Card } from "./Card";
import styles from "../../styles/landing/Card.module.scss";
import { SectionHeading } from "./SectionHeading";

export function BenefitsCards({ headingBlock, data, render = renderBenefits }) {
  return (
    <>
      <Container>
        <SectionHeading
          title={headingBlock.title}
          excerpt={headingBlock.excerpt}
          align='center'
          titleProps={{
            style: {
              color: "var(--primary)",
            },
          }}
        />
      </Container>
      <Row className={styles.benefitsRow}>{data.map(renderBenefits)}</Row>
    </>
  );
}

function renderBenefits(benefit) {
  return <Card key={benefit.block.id} block={benefit.block} />;
}
