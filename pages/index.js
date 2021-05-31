import Head from "next/head";

import { Splash } from "../components/Splash";
import styles from "../styles/Home.module.css";

export default function Home({ page }) {
  console.log();
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>{page?.seo[0]?.fields?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={page?.seo[0]?.fields?.description} />
        <meta property="og:title" content={page?.seo[0]?.fields?.title} />
        <meta
          property="og:site_name"
          content={page?.seo[0]?.fields?.sitename}
        />
        <meta property="og:url" content={page?.seo[0]?.fields?.url} />
        <meta
          property="og:description"
          content={page?.seo[0]?.fields?.description}
        />
        <meta
          property="og:image"
          content={page?.seo[0]?.fields?.ogImage?.fields?.url[0]?.url}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="cannonical" href={page?.seo[0]?.fields?.url} />
      </Head>

      <main className={styles.main}>
        <Splash data={page?.sections} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  // asynchronously import neccessary modules and avoid any client side evaluation
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

  // get related data if there is any
  if (launch?.fields?.sectionId?.length) {
    const sections = await getRelatedRecords(
      "sections",
      launch?.fields?.sectionId
    );

    // get all blocks for each section and their related media
    if (sections?.length) {
      launch.sections = await Promise.all(
        await sections.map(async (section) => {
          if (section?.fields?.blockId?.length) {
            const blocks = await getRelatedRecords(
              "blocks",
              section?.fields?.blockId
            );
            if (blocks?.length) {
              section.blocks = await Promise.all(
                await blocks.map(async (block) => {
                  if (block?.fields?.mediaId?.length) {
                    const media = await getRelatedRecords(
                      "media",
                      block?.fields?.mediaId
                    );

                    if (media?.length) {
                      block.media = media;
                    }
                  }
                  return block;
                })
              );
            }
          }
          return section;
        })
      );
    }
  }

  return {
    props: {
      page: launch?.id && launch
    }
  };
}
