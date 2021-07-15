import Head from "next/head";

export const SEO = ({ seo }) => {
  return (
    <Head>
      <title>{seo.title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={seo.description} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:site_name' content={seo.sitename} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.url} />
      <link rel='icon' href='/favicon.ico' />
      <link rel='cannonical' href={seo.url} />
    </Head>
  );
};
