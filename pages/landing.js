import { SEO } from "../components/SEO";
import { Container, Section, Row } from "../components/Containers";
import {
  BrandList,
  BenefitsCards,
  FeaturedBenefit,
  Header,
  Hero,
  Pricing,
  RiskCta,
  SectionHeading,
  Testimonial,
  PricesHeading,
} from "../components/landing";
import { Link } from "../components/Link";

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
    { landingFeaturedBenefit1 },
    { landingFeaturedBenefit2 },
    { landingFeaturedBenefit3 },
    { landingCtaRisk },
    { landingPricing },
    {
      /* @TODO: add final cta section -- then refactor / cleanup  */
      landingCtaUrgency,
    },
  ] = sortRows(rows);

  const [featuredTestimonial] = landingFeaturedTestimonial;

  console.log(
    "🚀 ~ file: landing.js ~ line 131 ~ Landing ~ landingCtaUrgency",
    landingCtaUrgency
  );

  const [pricesHeading, ...restPricing] = landingPricing.sort((a, b) =>
    a.block.order > b.block.order ? 1 : -1
  );

  return (
    <div className={styles.pageWrapper}>
      <SEO seo={seo} />
      <Header brandName={seo?.title} />
      <main className={styles.main}>
        <Section style={{ padding: "2em", textAlign: "center" }}>
          <Hero block={landingHero[0]?.block} />
          <Container>{/* <BrandList data={landingBrandList} /> */}</Container>
        </Section>
        <Section className='secondary-light'>
          <Container>
            <SectionHeading
              title={landingBenefitsIntro[0].block.title}
              excerpt={landingBenefitsIntro[0].block.excerpt}
              align='center'
            />
            <BenefitsCards
              data={landingBenefits.sort((a, b) =>
                // sort by block order ASC
                a.block.order > b.block.order ? 1 : -1
              )}
            />
          </Container>
          <Testimonial block={featuredTestimonial.block} />
        </Section>
        <Section>
          <Container>
            <FeaturedBenefit
              block={landingFeaturedBenefit1[0].block}
              alternate={landingFeaturedBenefit1[0]["filter"].includes(
                "reverse"
              )}
            />
          </Container>
          <div style={{ width: "100%", background: "var(--primary-light)" }}>
            <Container>
              <FeaturedBenefit
                block={landingFeaturedBenefit2[0].block}
                alternate={landingFeaturedBenefit2[0]["filter"].includes(
                  "reverse"
                )}
              />
            </Container>
          </div>
          <Container>
            <FeaturedBenefit
              block={landingFeaturedBenefit3[0].block}
              alternate={landingFeaturedBenefit3[0]["filter"].includes(
                "reverse"
              )}
            />
          </Container>
          <div style={{ width: "100%", background: "var(--secondary-light)" }}>
            <Container>
              <RiskCta block={landingCtaRisk[0].block} />
            </Container>
          </div>
        </Section>
        <Section>
          <PricesHeading block={pricesHeading.block} />

          <Container>
            <Pricing
              // we know the array always has 3 prices in it
              data={restPricing.sort((a, b) => (a.title > b.title ? 1 : -1))}
              // so if we sort it by the price, then the middle value
              // at index: 1 is the featured price value.
            />
          </Container>
        </Section>
        <Section className='primary-lighter'>
          {/* @TODO: add final cta section -- then refactor / cleanup  */}
          <Container style={{ margin: "4em auto" }}>
            <Row
              className='imgHolder'
              style={{
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img
                src={landingCtaUrgency[0].block.media.url[0]}
                alt={landingCtaUrgency[0].block.media.alt}
                width='300px'
              />
              <SectionHeading
                title={landingCtaUrgency[0].block.title}
                excerpt={landingCtaUrgency[0].block.excerpt}
                align='center'
              />
              <Link className="button accent"  href={landingCtaUrgency[0].block.links.href}>
                {landingCtaUrgency[0].block.links.title}
              </Link>
            </Row>
          </Container>
        </Section>
      </main>
      <footer className={styles.footer}>
        {" "}
        &copy;
        <span>Uptime Sentry</span> {new Date().getFullYear()}
      </footer>
    </div>
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
