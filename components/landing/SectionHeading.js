import styles from "../../styles/landing/SectionHeading.module.css";

export const SectionHeading = ({
  lead,
  title,
  excerpt,
  align,
  titleProps,
  color,
  ...rest
}) => {
  align = align ? align : "initial";
  return (
    <>
      <div
        className={styles.headingWrap}
        style={{
          margin: align === "center" ? "2em auto" : "2em 0",
        }}
        {...rest}
      >
        {lead && (
          <p style={{ color: color ? color : "currentColor" }}>{lead}</p>
        )}
        {title && <h2 {...titleProps}>{title}</h2>}
        {excerpt && (
          <p style={{ color: color ? color : "var(--gray100)" }}>{excerpt}</p>
        )}
      </div>
    </>
  );
};
