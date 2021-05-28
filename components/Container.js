import styles from "../styles/Containers.module.css";

export const Wrapper = ({ children, ...props }) => {
  return (
    <div className={styles.wrapper} {...props}>
      {children}
    </div>
  );
};

export const Container = ({ classes = [], children, ...props }) => {
  return (
    <div className={[styles.container, ...classes].join()} {...props}>
      {children}
    </div>
  );
};

export const Row = ({ classes = [], children, ...props }) => {
  return (
    <div className={[styles.flexRow, ...classes].join()} {...props}>
      {children}
    </div>
  );
};
