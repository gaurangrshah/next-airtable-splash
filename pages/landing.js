import { SEO } from "../components/SEO";

import { PageBuild } from "../utils/data-helpers";

export default function Landing({ page }) {
  const { seo, page: rows } = page;

  return (
    <>
      <SEO seo={seo} />
      <div>{JSON.stringify(page)}</div>;
    </>
  );
}

export async function getStaticProps() {
  const { getPage } = await import("../lib/pg");

  const response = await getPage("landing");
  const page = PageBuild(response?.rows);

  return {
    props: {
      page,
    },
  };
}
