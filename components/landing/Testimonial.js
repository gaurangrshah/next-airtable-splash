import Image from "next/image";

import { Container } from '../Containers';

import styles from "../../styles/landing/Testimonial.module.css";

export const Testimonial = ({ block }) => {
  return (
    <>
      <div className={styles.testimonial}>
        "<em>{block?.content}</em>"
        <div className={styles.row}>
          <Image
            src={block.media.url[0]}
            alt={block.media.alt}
            layout='intrinsic'
            width='48'
            height='48'
          />
          <h5 style={{ fontSize: "medium" }}>{block.title},</h5>
          <strong>{block.lead}</strong> of
          <strong>{block.excerpt}</strong>
        </div>
      </div>
    </>
  );
};
