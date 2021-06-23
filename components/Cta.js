import styles from "../styles/Cta.module.css";

export const Cta = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");
    console.log(input.value);
  };

  return (
    <div className={styles.cta}>
      {data?.map(({ block }, i) => {
        return (
          <div key={block?.id}>
            <h2>{block?.title}</h2>
            <p>{block?.excerpt}</p>
            {data[i]?.filter.includes("withForm") && (
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    type='email'
                    placeholder='you@youremail.com'
                    required
                    className={styles.input}
                  />
                  <div className={styles.inputRight}>
                    <button type='submit' className={styles.submit}>
                      Sign up now
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        );
      })}
    </div>
  );
};
