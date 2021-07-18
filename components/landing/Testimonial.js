import Image from "next/image";
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
          <Image
            src={block.media.url[0]}
            alt={block.media.alt}
            layout='intrinsic'
            width='48'
            height='48'
            placeholder='blur'
          />
          <h5 style={{ fontSize: "medium" }}>{block.title},</h5>
          <strong>{block.lead}</strong> of
          <strong>{block.excerpt}</strong>
        </Row>
      </div>
    </>
  );
};
