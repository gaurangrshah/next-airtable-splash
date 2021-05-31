import Image from "next/image";
import styles from "../styles/List.module.css";

export const List = ({ data, ...rest }) => {
  return (
    <ul className={styles.list}>
      {data?.map((block) => (
        <ListItem
          key={block?.id}
          className={styles.listItem}
          img={block?.media[0]?.fields}
          {...rest}
        >
          {block?.fields?.title}
        </ListItem>
      ))}
    </ul>
  );
};

export const ListItem = ({ img, filter = [], children }) => {
  return (
    <li className={styles.listItem}>
      {filter?.includes("withIcons") && (
        <span className={styles.icon}>
          <Image
            layout='intrinsic'
            src={img?.url[0].url}
            alt={img?.alt}
            width='28px'
            height='28px'
          />
        </span>
      )}
      {children}
    </li>
  );
};
