import { Link } from "../Link";

import styles from "../../styles/landing/Header.module.scss";

export function Header({ brandName }) {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <img src='/logo-holder.svg' width='32px' height='32px' />
          <h3>{brandName}</h3>
        </Link>

        <nav aria-label='primary'>
          <Link className='button primary' href='#'>
            CLICK HERE
          </Link>
        </nav>
      </header>
    </>
  );
}
