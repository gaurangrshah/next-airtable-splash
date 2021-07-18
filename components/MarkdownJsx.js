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
          // overrides allow defining of specific components to be used to render each element
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
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

const highlightStyles = {
  fontWeight: "bold",
  fontSize: "medium",
};
