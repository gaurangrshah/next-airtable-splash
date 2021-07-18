export function Button({ variant = "primary", ...props }) {
  return (
    <>
      <button
        className={variant}
        onClick={() => alert("WHOOO HOO! Cha Ching ")}
        {...props}
      />
    </>
  );
}
