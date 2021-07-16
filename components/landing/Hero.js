import { Container } from "../Containers";
import { Link } from "../Link";
import styles from "../../styles/landing/Hero.module.scss";

export function Hero({ block }) {
  return (
    <Container className={styles.hero}>
      <h1>{block?.title}</h1>
      <h3>{block?.excerpt}</h3>
      <div className={styles.btnWrap}>
        <Link className='button primary' href={block.links?.href}>
          {block?.links?.title}
        </Link>
      </div>
      <img src={block.media?.url[0]} alt={block.media?.alt} width='600px' />
    </Container>
  );
}
