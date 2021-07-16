import { Row } from "../Containers";
import styles from "../../styles/landing/BrandList.module.scss";

export function BrandList({ data, render = renderBrands }) {
  return (
    <>
      <h4 className={styles.brandHead}>{data[0]?.block?.lead}</h4>
      <Row className={styles.brandRow} fluid={false}>
        {data.map(render)}
      </Row>
    </>
  );
}

export function renderBrands({ block }) {
  return (
    <img
      key={block.media.title}
      src={block.media.url[0]}
      alt={block.media.alt}
      height='50px'
    />
  );
}
