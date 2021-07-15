import styles from "../styles/Button.module.css";

export function Button({ variant = "primary", ...props }) {
  return (
    <button
      className={styles[variant]}
      onClick={() => alert("WHOOO HOO! Cha Ching ")}
      {...props}
    />
  );
}
