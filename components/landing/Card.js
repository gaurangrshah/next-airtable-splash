import styles from "../../styles/landing/Card.module.scss";

export function Card({ block, ...props }) {

  return (
    <div className={styles.card} {...props}>
      <img src={block.media.url[0]} alt={block.media.alt} height='120px' />
      <h4>{block.title}</h4>
      <p>{block.excerpt}</p>
    </div>
  );
}
