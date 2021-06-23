import Head from "next/head";

import { Splash } from "../components/Splash";
import { removeNullValues } from "../utils/data-helpers";

import styles from "../styles/Home.module.css";

export default function Home({ rows }) {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>{rows[0]?.seo_title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={rows[0]?.seo_description} />
        <meta property='og:title' content={rows[0]?.seo_title} />
        <meta property='og:site_name' content={rows[0]?.seo_sitename} />
        <meta property='og:url' content={rows[0]?.seo_url} />
        <meta property='og:description' content={rows[0]?.seo_description} />
        <meta property='og:image' content={rows[0]?.url} />
        <link rel='icon' href='/favicon.ico' />
        <link rel='cannonical' href={rows[0]?.url} />
      </Head>

      <main className={styles.main}>
        <Splash data={rows} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { getSections } = await import("../lib/pg");

  const response = await getSections();
  const rows = removeNullValues(response?.rows);

  return {
    props: {
      rows,
    },
  };
}
