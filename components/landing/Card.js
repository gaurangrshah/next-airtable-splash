export function Card({ style, block, ...props }) {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 1em",
        padding: "0.5em 1em",
        flex: "0 1 100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        ...style,
      }}
    >
      <img
        src={block.media.url[0]}
        alt={block.media.alt}
        height='120px'
      />
      <h4 style={{ fontSize: "large", margin: "1em 0" }}>{block.title}</h4>
      <p style={{ color: "var(--gray100)" }}>{block.excerpt}</p>
    </div>
  );
}
