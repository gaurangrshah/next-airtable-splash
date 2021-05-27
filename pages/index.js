import Head from "next/head";

import { Splash } from "../components/Splash";

import styles from "../styles/Home.module.css";

export default function Home({ page }) {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>CMS Splash Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Splash data={page?.sections} />
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
  const page = await getPage("launch");
  const [launch] = page;

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

    return {
      props: {
        page: launch,
      },
    };
  }
}
