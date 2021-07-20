import Image from "next/image";

import { Row } from "../Containers";
import { MarkdownJSX } from "../MarkdownJsx";

import styles from "../../styles/landing/FeaturedBenefits.module.css";

export const FeaturedBenefit = ({ block, alternate, data }) => {
  return (
    <>
      <Row
        className={[styles?.benefit, alternate ? styles?.alternate : ""].join(
          " "
        )}
        data-test={data}
      >
        <Image
          src={block?.media?.url[0]}
          alt={block.media?.alt}
          layout='intrinsic'
          width={1180}
          height={920}
        />

        <div className={styles.content}>
          <h3>{block.title}</h3>
          <p>{block.excerpt}</p>
          <MarkdownJSX className={styles.markdown} markdown={block.bullets}s />
        </div>
      </Row>
    </>
  );
};
