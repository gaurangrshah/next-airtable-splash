import { Row } from "../Containers";

const isFeaturedStyles = {
  maxWidth: "50%",
  margin: "0 auto",
  color: "var(--gray100)",
  fontWeight: 300,
  lineHeight: 1.4,
  textAlign: "center",
  marginBottom: "3em",
};

export const Testimonial = ({ block, isFeatured }) => {
  const styles = isFeatured ? { ...isFeaturedStyles } : {};

  return (
    <div style={styles}>
      "
      <em
        style={{
          textAlign: "center",
          fontSize: "large",
          ...styles,
        }}
      >
        {block?.content}
      </em>
      "
      <Row style={{ justifyContent: "center", gap: "5px" }}>
        <img
          src={block.media.url[0]}
          alt={block.media.alt}
          width='32'
          height='32'
        />
        <h5 style={{ fontSize: "medium" }}>{block.title},</h5>
        <strong>{block.lead}</strong> of
        <strong>{block.excerpt}</strong>
      </Row>
    </div>
  );
};
