import Image from "next/image";
import { Row } from "../Containers";
import { MarkdownJSX } from "../MarkdownJsx";

import styles from "../../styles/landing/FeaturedBenefits.module.scss";

export const FeaturedBenefit = ({ block, alternate, data }) => {
  return (
    <>
      <Row
        className={[
          alternate ? styles.alternate : styles.benefit,
          styles.alternate,
        ].join(" ")}
        data-test={data}
      >
        <Image
          src={block?.media?.url[0]}
          alt={block.media?.alt}
          layout='intrinsic'
          width={1180}
          height={920}
          placeholder='blur'
        />
        <div className={styles.contentHolder}>
          <h3>{block.title}</h3>
          <p>{block.excerpt}</p>
          <MarkdownJSX markdown={block.bullets} />
        </div>
      </Row>
    </>
  );
};
