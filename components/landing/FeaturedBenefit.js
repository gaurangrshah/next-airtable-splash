import { Row } from "../Containers";
import { MarkdownJSX } from "../MarkdownJsx";

import styles from "../../styles/landing/FeaturedBenefits.module.scss";

export const FeaturedBenefit = ({ block, alternate, data }) => {

  return (
    <>
      <Row
        className={[alternate ? styles.alternate : styles.benefit , styles.alternate].join(" ")}
        data-test={data}
      >
        <div className={styles.imgHolder}>
          <img src={block?.media?.url[0]} alt={block.media?.alt} />
        </div>
        <div className={styles.contentHolder}>
          <h3>{block.title}</h3>
          <p>{block.excerpt}</p>
          <MarkdownJSX markdown={block.bullets} />
        </div>
      </Row>
    </>
  );
};
