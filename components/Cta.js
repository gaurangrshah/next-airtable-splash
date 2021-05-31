import styles from "../styles/Hero.module.css";
import Image from "next/image";

export const Hero = ({ data }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p className={styles.lead}>{data[0]?.fields?.lead}</p>
        <h1 className={styles.heading}>{data[0]?.fields?.title}</h1>
        <p className={styles.excerpt}>{data[0]?.fields?.excerpt}</p>
      </div>
      {data[0]?.media?.length && (
        <div className={styles.heroImage}>
          <Image
            layout='intrinsic'
            src={data[0]?.media[0]?.fields?.url[0]?.url}
            alt={data[0]?.media[0]?.fields?.alt}
            objectFit='fill'
            width={600}
            height={600}
          />
        </div>
      )}
    </div>
  );
};
