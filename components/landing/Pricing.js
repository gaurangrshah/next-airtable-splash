import { Container, Row } from "../Containers";
import { Link } from "../Link";
import { MarkdownJSX } from "../MarkdownJsx";
import styles from "../../styles/landing/Pricing.module.scss";

export const PricesHeading = ({ block }) => {
  return (
    <Container className={styles.pricesHeading}>
      <h2 style={{ width: "80%", fontSize: "xx-large", margin: "0 auto" }}>
        {block.title}
      </h2>
      <p style={{ width: "60%", margin: "2em auto", lineHeight: 1.6 }}>
        {block.excerpt}
      </p>
    </Container>
  );
};

export const Pricing = ({ data, render = renderPricingCard }) => {
  return (
    <>
      <Container className={styles.pricingContainer}>
        <Row>{data.map(render)}</Row>
      </Container>
    </>
  );
};

export const PricingCard = ({ pricing, isFeatured }) => {
  return (
    <>
      <div
        className={styles.cardWrap}
        style={{
          width: isFeatured ? "1200px" : "100%",
          border: isFeatured ? "2px solid green" : "none",
        }}
      >
        <div className={styles.pricepoint}>
          <p>{pricing.block.lead}</p>
          <h2>{pricing.block.title}</h2>
          <small>{pricing.block.excerpt}</small>
          <br />
          <p className='excerpt'>{pricing.block.content}</p>
        </div>

        <MarkdownJSX
          markdown={pricing.block.bullets}
          type='pricing'
          highlight={isFeatured}
        />
        <div>
          <Link className="button primary" href={pricing.block.links.href}>
            {pricing.block.links.title}
          </Link>
        </div>
      </div>
    </>
  );
};

function renderPricingCard(pricing, i) {
  return (
    <PricingCard
      key={`${pricing.id}-${i}`}
      pricing={pricing}
      isFeatured={i === 1}
    />
  );
}
