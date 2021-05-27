import styles from "../styles/List.module.css";

export const List = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data?.map((block) => (
        <ListItem
          key={block?.id}
          className={styles.listItem}
          img={block?.media[0]?.fields}
        >
          {console.log(block)}
          {block?.fields?.title}
        </ListItem>
      ))}
    </ul>
  );
};

export const ListItem = ({ img, children }) => {
  return (
    <li className={styles.listItem}>
      <span className={styles.icon}>
        <img src={img?.url[0].url} alt={img?.alt} width='28px' height='28px' />
      </span>
      {children}
    </li>
  );
};
