import Head from "next/head";

import { Splash } from "../components/Splash";
import { removeNullValues } from "../utils/data-helpers";

import styles from "../styles/Home.module.css";

export default function Home({ page, rows, fields }) {
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
        {/* <Splash data={page?.sections} /> */}
        <Splash data={rows} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/sections");
  const data = await response.json();
  const rows = removeNullValues(data?.rows);

  // const { getSections } = await import("../lib/pg");

  // // asynchronously import neccessary modules and avoid any client side evaluation
  // const { getPage, getRecordById, getRelatedRecords } = await import(
  //   "../lib/airtable"
  // );

  // // query inital data from airtable
  // const [launch] = await getPage("launch");

  // // get related seo metadata
  // if (launch?.fields?.seoId?.length) {
  //   const seo = await getRelatedRecords("seo", launch?.fields?.seoId);

  //   if (seo[0]?.fields?.mediaId.length) {
  //     // get related media for seo og:image
  //     const ogImage = await getRecordById("media", seo[0]?.fields?.mediaId[0]);
  //     seo[0].fields.ogImage = ogImage;
  //   }
  //   launch.seo = seo;
  // }

  // // get related data if there is any
  // if (launch?.fields?.sectionId?.length) {
  //   const sections = await getRelatedRecords(
  //     "sections",
  //     launch?.fields?.sectionId
  //   );

  //   // get all blocks for each section and their related media
  //   if (sections?.length) {
  //     launch.sections = await Promise.all(
  //       await sections.map(async (section) => {
  //         if (section?.fields?.blockId?.length) {
  //           const blocks = await getRelatedRecords(
  //             "blocks",
  //             section?.fields?.blockId
  //           );
  //           if (blocks?.length) {
  //             section.blocks = await Promise.all(
  //               await blocks.map(async (block) => {
  //                 if (block?.fields?.mediaId?.length) {
  //                   const media = await getRelatedRecords(
  //                     "media",
  //                     block?.fields?.mediaId
  //                   );

  //                   if (media?.length) {
  //                     block.media = media;
  //                   }
  //                 }
  //                 return block;
  //               })
  //             );
  //           }
  //         }
  //         return section;
  //       })
  //     );
  //   }
  // }

  return {
    props: {
      // page: launch?.id ? launch : [],
      rows: rows?.length ? rows : [],
      // fields: removeNullValues(sections?.fields),
    },
  };
}
