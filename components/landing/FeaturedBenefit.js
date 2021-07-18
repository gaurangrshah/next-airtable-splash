import Image from "next/image";
import { Row } from "../Containers";
import { MarkdownListJSX } from "../MarkdownJsx";

import styles from "../../styles/landing/FeaturedBenefits.module.scss";

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

        <div>
          <h3>{block.title}</h3>
          <p>{block.excerpt}</p>
          <MarkdownListJSX
            className={styles.markdown}
            markdown={block.bullets}
            overrides={{
              ul: (props) => <ul className={styles.ul} {...props} />,
              li: (props) => <li className={styles.li} {...props} />,
            }}
          />
        </div>
      </Row>
    </>
  );
};
