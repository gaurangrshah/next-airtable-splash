import Image from "next/image";

import styles from "../../styles/landing/Card.module.css";

export function Card({ block, ...props }) {
  return (
    <div className={styles.card} {...props}>
      <Image
        src={block.media.url[0]}
        alt={block.media.alt}
        width='220px'
        height='220px'
        style={{ backgroundImage: "/blob-primary-light.png" }}
      />
      <h4>{block.title}</h4>
      <p>{block.excerpt}</p>
    </div>
  );
}
