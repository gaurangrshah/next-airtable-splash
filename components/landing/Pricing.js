import { Row } from "../Containers";
import { Button } from "../Button";
import { MarkdownJSX } from "../MarkdownJsx";

export const PricesHeading = ({ block }) => {
  return (
    <>
      <h2 style={{ width: "80%", fontSize: "xx-large", margin: "0 auto" }}>
        {block.title}
      </h2>
      <p style={{ width: "60%", margin: "2em auto", lineHeight: 1.6 }}>
        {block.excerpt}
      </p>
    </>
  );
};

function byPrice(a, b) {
  return a.title > b.title ? 1 : -1;
}

export const Pricing = ({ data, render }) => {
  return (
    <Row
      style={{
        margin: "1em 2em",
        gap: "0.25em",
      }}
    >
      {data.map(render)}
    </Row>
  );
};

export const PricingCard = ({ pricing, isFeatured }) => {
  return (
    <div
      style={{
        width: isFeatured ? "1200px" : "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2em",
        borderRadius: "6px",
        textAlign: "center",
        border: isFeatured ? "2px solid var(--accent)" : "none",
        boxShadow:
          "0px 4px 6px -1px rgba(0,0,0,0.1) , 0px 2px 4px -1px rgba(0,0,0,0.06)",
      }}
    >
      <div>
        <p>{pricing.block.lead}</p>
        <h2 style={{ lineHeight: 1.2, margin: 0, padding: 0 }}>
          {pricing.block.title}
        </h2>
        <small style={{ color: "var(--gray100)" }}>
          {pricing.block.excerpt}
        </small>
        <br />
        <p
          style={{
            maxWidth: "70%",
            margin: "1.5em auto",
            color: "var(--gray100)",
            lineHeight: 1.4,
          }}
        >
          {pricing.block.content}
        </p>
      </div>

      <MarkdownJSX
        markdown={pricing.block.bullets}
        type='pricing'
        highlight={isFeatured}
      />
      <div>
        <Button onClick={pricing.block.links.href}>
          {pricing.block.links.title}
        </Button>
      </div>
    </div>
  );
};
