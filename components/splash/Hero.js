import Image from "next/image";

import styles from "../../styles/splash/Hero.module.css";

export const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.lead}>{data?.lead}</p>
        <h1 className={styles.heading}>{data?.title}</h1>
        <p className={styles.excerpt}>{data?.excerpt}</p>
      </div>
      {data?.media && (
        <div className={styles.heroImage}>
          <Image
            layout='intrinsic'
            src={data?.media?.url[0]}
            alt={data?.media?.alt}
            objectFit='fill'
            width={600}
            height={600}
          />
        </div>
      )}
    </div>
  );
};
