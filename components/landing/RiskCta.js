import Image from "next/image";

import { Row } from "../Containers";
import { Link } from "../Link";

import styles from "../../styles/landing/RiskCta.module.scss";

export const RiskCta = ({ block }) => {
  return (
    <>
      <Row className={styles.riskRow}>
        <div className={styles.imgHolder}>
          <Image
            src={block.media.url[0]}
            alt={block.media.alt}
            height='100px'
            width='100px'
          />
        </div>
        <div>
          <h4>{block.title}</h4>
          <p>{block.excerpt}</p>
        </div>
        <div className={styles.btnWrap}>
          <Link className='button primary' href={block.links.href}>
            {block.links.title}
          </Link>
        </div>
      </Row>
    </>
  );
};
