export default function Landing({ page }) {
  console.log("🚀 ~ file: landing.js ~ line 2 ~ Landing ~ page", page);
  return <div>{JSON.stringify(page)}</div>;
}

export async function getStaticProps() {
  const { getPage } = await import("../lib/pg");

  const response = await getPage("landing");
  return {
    props: {
      page: response?.rows,
    },
  };
}
