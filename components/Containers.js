import styles from "../styles/Containers.module.scss";
/**
 * USAGE:
   ⚠️ This file provies a unique but simple api for merging classNames
    see comments below for more info.
    // @link:  https://stackoverflow.com/questions/57523884/how-to-combine-multiple-classnames-in-react
 */

export const Container = ({ className = "", children, ...props }) => {
  return (
    <>
      {/* uses .join() to merge all classes together */}
      <div className={[styles.container, className].join(" ")} {...props}>
        {children}
      </div>
    </>
  );
};

export const Row = ({ className = "", children, ...props }) => {
  console.log(
    "🚀 ~ file: Containers.js ~ line 21 ~ Row ~ className",
    className
  );
  return (
    <>
      <div className={[styles.row, className].join(" ")} {...props}>
        {children}
      </div>
    </>
  );
};

export const Section = ({ className = "", children, ...props }) => {
  return (
    <>
      <section className={[styles.section, className].join(" ")} {...props}>
        {children}
      </section>

      <style jsx>{`
        .section {
          position: relative;
          display: block;
          width: 100%;
          min-height: 20vh;
        }
      `}</style>
    </>
  );
};

export const Wrapper = ({ children, ...props }) => {
  return (
    <>
      <div className={styles.wrapper} {...props}>
        {children}
      </div>
    </>
  );
};
