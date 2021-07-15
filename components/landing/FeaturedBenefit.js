import { Row } from "../Containers";
import { MarkdownJSX } from "../MarkdownJsx";

const rowStyles = {
  padding: "0 2em",
  width: "90%",
  margin: "0 auto",
  justifyContent: "center",
};

const responsiveRowStyles = {
  padding: "0 2em",
  width: "100%",
  margin: "0 auto",
  flexDirection: "row-reverse",
  justifyContent: "center",
  borderRadius: "25px",
};

export const FeaturedBenefit = ({ block, alternate }) => {
  const styles = alternate ? { ...responsiveRowStyles } : { ...rowStyles };

  return (
    <Row style={styles}>
      <div
        style={{
          padding: "4em",
          width: "50%",
          margin: "0 auto",
          border: "var(--debug)",
        }}
      >
        <img
          src={block?.media?.url[0]}
          alt={block.media?.alt}
          style={{
            display: "block",
            maxWidth: "300px",
            maxHeight: "35vh",
          }}
        />
      </div>
      <div style={{ width: "50%", margin: "0 auto" }}>
        <h3>{block.title}</h3>
        <p style={{ lineHeight: 1.5 }}>{block.excerpt}</p>
        <MarkdownJSX markdown={block.bullets} />
      </div>
    </Row>
  );
};
