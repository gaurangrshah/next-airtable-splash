import styles from "../../styles/landing/SectionHeading.module.scss";

export const SectionHeading = ({ lead, title, excerpt, align }) => {
  align = align ? align : "initial";
  return (
    <>
      <div className={styles.headingWrap} style={{ textAlign: align }}>
        {lead && <p style={{ textAlign: align }}>{lead}</p>}
        {title && <h2 style={{ textAlign: align }}>{title}</h2>}
        {excerpt && <p style={{ textAlign: align }}>{excerpt}</p>}
      </div>
    </>
  );
};
