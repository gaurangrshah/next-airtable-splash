import { SEO } from "../components/SEO";
import { Container, Section, Row } from "../components/Containers";
import {
  BenefitsCards,
  BrandList,
  FeaturedBenefit,
  Header,
  Hero,
  Testimonial,
} from "../components/landing";

import { PageBuild, sortRows } from "../utils/data-helpers";

import styles from "../styles/Landing.module.css";

export default function Landing({ page }) {
  const { seo, page: rows } = page;
  const [
    { landingHero },
    { landingBrandList },
    { landingBenefitsIntro },
    { landingBenefits },
    { landingFeaturedTestimonial },
  ] = sortRows(rows);

  const [featuredTestimonial] = landingFeaturedTestimonial;

  return (
    <>
      <SEO seo={seo} />
      <div className={styles.pageWrapper}>
        <Header brandName={seo?.title} />
        <main className={styles.main}>
          <Section style={{ padding: "2em", textAlign: "center" }}>
            <Hero block={landingHero[0]?.block} />
            <Container>
              <BrandList data={landingBrandList} />
            </Container>
          </Section>
          <Section className='secondary-light'>
            <BenefitsCards
              headingBlock={landingBenefitsIntro[0].block}
              // sort by block order ASC
              data={landingBenefits.sort((a, b) =>
                a.block.order > b.block.order ? 1 : -1
              )}
            />
            <Testimonial block={featuredTestimonial.block} />
          </Section>
        </main>
        <footer className={styles.footer}>
          &copy;
          <span>Uptime Sentry</span> {new Date().getFullYear()}
        </footer>
      </div>
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
