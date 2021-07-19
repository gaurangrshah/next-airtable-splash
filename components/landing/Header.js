import { Link } from "../Link";
import Image from "next/image";

import styles from "../../styles/landing/Header.module.css";

export function Header({ brandName }) {
  return (
    <>
      <header className={styles.header}>
        <Link href='/'>
          <Image src='/logo-holder.svg' width='32px' height='32px' />
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
