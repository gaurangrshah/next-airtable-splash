import Image from "next/image";
import styles from "../../styles/splash/List.module.css";

export const List = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data?.map((section) => {
        const { block } = section;
        return (
          <ListItem
            key={block?.id}
            className={styles.listItem}
            img={block?.media}
            data={data}
            style={{ order: block }}
          >
            {block?.title}
          </ListItem>
        );
      })}
    </ul>
  );
};

export const ListItem = ({ img, data, children }) => {
  return (
    <li className={styles.listItem}>
      {data[0].filter[0] === "withIcons" && (
        <span className={styles.icon}>
          <Image
            layout='intrinsic'
            src={img?.url[0]}
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
