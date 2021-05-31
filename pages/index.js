import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ page }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
        <div className={styles.card}>{JSON.stringify(page, null, 2)}</div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // asynchronously import neccessary modules so we can avoid any client side compilation
  const { getPage, getRecordById, getRelatedRecords } = await import(
    "../lib/airtable"
  );

  // query inital data from airtable
  const [launch] = await getPage("launch");

  // get related seo metadata
  if (launch?.fields?.seoId?.length) {
    const seo = await getRelatedRecords("seo", launch?.fields?.seoId);

    if (seo[0]?.fields?.mediaId.length) {
      // get related media for seo og:image
      const ogImage = await getRecordById("media", seo[0]?.fields?.mediaId[0]);
      seo[0].fields.ogImage = ogImage;
    }
    launch.seo = seo;
  }

  return {
    props: {
      page: launch?.id ? launch : []
    },
  };
}
