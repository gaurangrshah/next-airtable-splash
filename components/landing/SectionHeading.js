export const SectionHeading = ({ lead, title, excerpt, align = "center" }) => {
  return (
    <div style={{ margin: "0 5em", textAlign: align }}>
      {lead && <p>{lead}</p>}
      <h2
        style={{
          fontSize: "xx-large",
          marginTop: "2em",
          marginBottom: "1em",
        }}
      >
        {title && title}
      </h2>
      <p style={{ fontSize: "large", margin: "2em" }}>{excerpt && excerpt}</p>
    </div>
  );
};
