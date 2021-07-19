import Image from "next/image";
import { Link } from "../Link";
import { Row } from "../Containers";
import { SectionHeading } from "./SectionHeading";

import styles from "../../styles/landing/FooterCta.module.css";

export const FooterCta = ({ block }) => {
  return (
    <Row className={styles.imgRow}>
      <Image
        src={block.media.url[0]}
        alt={block.media.alt}
        layout='intrinsic'
        width='300px'
        height='286px'
      />
      <SectionHeading
        title={block.title}
        excerpt={block.excerpt}
        align='center'
      />
      <Link className='button accent' href={block.links.href}>
        {block.links.title}
      </Link>
    </Row>
  );
};
