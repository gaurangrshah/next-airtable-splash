import Image from "next/image";

import { Container } from "../Containers";
import { Link } from "../Link";
import styles from "../../styles/landing/Hero.module.scss";
import { SectionHeading } from "./SectionHeading";

export function Hero({ block }) {
  return (
    <Container className={styles.hero}>
      <SectionHeading
        title={block?.title}
        excerpt={block?.excerpt}
        align='center'
      />
      <div className={styles.btnWrap}>
        <Link className='button primary' href={block.links?.href}>
          {block?.links?.title}
        </Link>
      </div>
      <Image
        layout='intrinsic'
        src={block?.media?.url[0]}
        alt={block?.media?.alt}
        layout='intrinsic'
        width={600}
        height={381.5}
        placeholder='blur'
      />
    </Container>
  );
}
