import { Link } from "../Link";
import { Container, Row } from "../Containers";
import { MarkdownJSX } from "../MarkdownJsx";

import styles from "../../styles/landing/Pricing.module.css";

export const PricesHeading = ({ block }) => {
  return (
    <Container className={styles.prices_heading}>
      <h2>{block.title}</h2>
      <p>{block.excerpt}</p>
    </Container>
  );
};

export const Pricing = ({ data, render = renderPricingCard }) => {
  const [pricesHeading, ...restPricing] = data.sort((a, b) =>
    a.block.order > b.block.order ? 1 : -1
  );
  return (
    <>
      <PricesHeading block={pricesHeading.block} />
      <Container className={styles.prices}>
        <Row className='fluid'>
          {/*
          the restPricing array will always have 3 prices in it
          -- use sort to target the middle price as the featured price
          -- then immediately iterate over that sorted array and render each PricingCard
          */}
          {restPricing.sort((a, b) => (a.title > b.title ? -1 : 1)).map(render)}
        </Row>
      </Container>
    </>
  );
};

export const PricingCard = ({ pricing, isFeatured }) => {
  return (
    <>
      <div
        className={styles.price_card}
        style={{
          width: isFeatured ? "1200px" : "100%",
          border: isFeatured ? "2px solid var(--secondary)" : "none",
        }}
      >
        <div className={styles.pricepoint}>
          <p>{pricing.block.lead}</p>
          <h2>${pricing.block.title}</h2>
          <small>{pricing.block.excerpt}</small>
          <br />
          <p className={styles.excerpt}>{pricing.block.content}</p>
        </div>

        <MarkdownJSX
          markdown={pricing.block.bullets}
          type='pricing'
          highlight={isFeatured}
        />
        <div>
          <Link
            className={`button primary ${isFeatured ? "" : "outline"}`}
            href={pricing.block.links.href}
          >
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
      // price at index: 1 is the featured price value.
      isFeatured={i === 1} // used to highlight the featured pricepoint
    />
  );
}
