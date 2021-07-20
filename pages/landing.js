export default function Landing({ page }) {
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
