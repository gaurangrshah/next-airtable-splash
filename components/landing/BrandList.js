import Image from "next/image";

import styles from "../../styles/landing/BrandList.module.scss";

export function BrandList({ data, render = renderBrands }) {
  return (
    <>
      <h4 className={styles.heading}>{data[0]?.block?.lead}</h4>
      <div className={styles.row}>{data.map(render)}</div>
    </>
  );
}

export function renderBrands({ block }) {
  return (
    <Image
      className={styles.brandIcon}
      key={block?.media?.id}
      title={block?.media?.title}
      src={block?.media?.url[0]}
      alt={block?.media?.alt}
      layout='intrinsic'
      width={60}
      height={54.4}
    />
  );
}
