import styles from "../../styles/landing/Testimonial.module.scss";
import { Row } from "../Containers";

export const Testimonial = ({ block }) => {
  return (
    <>
      <div className={styles.testimonial}>
        "<em>{block?.content}</em>"
        <Row
          style={{ justifyContent: "center", gap: "5px", marginBottom: "4em" }}
        >
          <img
            src={block.media.url[0]}
            alt={block.media.alt}
            width='48'
            height='48'
          />
          <h5 style={{ fontSize: "medium" }}>{block.title},</h5>
          <strong>{block.lead}</strong> of
          <strong>{block.excerpt}</strong>
        </Row>
      </div>
    </>
  );
};
