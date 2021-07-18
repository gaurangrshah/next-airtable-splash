import Markdown from "markdown-to-jsx";
import styles from "../styles/Markdown.module.css";
export const MarkdownJSX = ({
  markdown = "",
  type = "list",
  highlight = false,
  overrides,
  ...rest
}) => {
  return (
    <Markdown
      className={styles.markdown}

      {...rest}
      options={{
        overrides: {
          span: (props) => (
            <span className={styles.span} {...props} {...rest.span} />
          ),
          ul: (props) => <ul className={styles.ul} {...props} {...rest.ul} />,
          li: (props) => <li className={styles.li} style={highlight ? {...highlightStyles} : {}} {...props} {...rest.li} />,
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};


const highlightStyles = {
  fontWeight: 'bold',
  fontSize: 'medium'
}

export const MarkdownListJSX = ({
  markdown = "",
  type = "list",
  highlight = false,
  overrides,
  ...rest
}) => {
  return (
    <Markdown
      className={styles.markdown}
      {...rest}
      options={{
        overrides: {
          span: (props) => (
            <span className={styles.span} {...props} {...rest.span} />
          ),
          ul: (props) => <ul className={styles.ul} {...props} {...rest.ul} />,
          li: (props) => (
            <li
              className={styles.li}
              style={highlight ? { ...highlightStyles } : {}}
              {...props}
              {...rest.li}
            />
          ),
          ...overrides
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};
