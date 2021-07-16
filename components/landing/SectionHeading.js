import styles from "../../styles/landing/SectionHeading.module.scss";

export const SectionHeading = ({ lead, title, excerpt, align }) => {
  return (
    <>
      <div
        className={styles.headingWrap}
        style={{ textAlign: align ? "center" : "left" }}
      >
        {lead && <p>{lead}</p>}
        <h2 style={{ textAlign: align ? "center" : "left" }}>
          {title && title}
        </h2>
        <p style={{ textAlign: align ? "center" : "left" }}>
          {excerpt && excerpt}
        </p>
      </div>
    </>
  );
};
