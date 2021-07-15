import { Section } from "../components/Containers";
import {
  BrandList,
  BenefitsCards,
  Card,
  FeaturedBenefit,
  HeaderContent,
  Hero,
  Pricing,
  PricingCard,
  RiskCta,
  SectionHeading,
  Testimonial,
  PricesHeading,
} from "../components/landing";
import { SEO } from "../components/SEO";

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
    { landingCtaUrgency },
  ] = sortRows(rows);
  console.log(
    "🚀 ~ file: landing.js ~ line 146 ~ Landing ~ landingCtaUrgency",
    landingCtaUrgency
  );
  const [pricesHeading, ...restPricing] = landingPricing.sort((a, b) =>
    a.block.order > b.block.order ? 1 : -1
  );

  return (
    <div className={styles.pageWrapper}>
      <SEO seo={seo} />
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <HeaderContent brandName={seo?.title} />
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <Section style={{ padding: "2em", textAlign: "center" }}>
          <div className={styles.container}>
            <Hero block={landingHero[0]?.block} />
          </div>
          <div className={styles.container}>
            <BrandList
              data={landingBrandList}
              render={(listItem) => (
                <img
                  key={listItem.block.media.id}
                  src={listItem.block.media.url[0]}
                  alt={listItem.block.media.alt}
                  height='50px'
                />
              )}
            />
          </div>
        </Section>
        <Section classes={["secondary-light"]}>
          <div className={styles.container}>
            <SectionHeading
              title={landingBenefitsIntro[0].block.title}
              excerpt={landingBenefitsIntro[0].block.excerpt}
            />
            <BenefitsCards
              data={landingBenefits.sort((a, b) =>
                // sort by block order ASC
                a.block.order > b.block.order ? 1 : -1
              )}
              render={(benefit) => (
                <Card key={benefit.block.id} block={benefit.block} />
              )}
            />
          </div>
          <Testimonial
            block={landingFeaturedTestimonial[0].block}
            isFeatured={landingFeaturedTestimonial[0].filter[0]}
          />
        </Section>
        <Section>
          <div className={styles.container}>
            <FeaturedBenefit
              block={landingFeaturedBenefit1[0].block}
              alternate={landingFeaturedBenefit1[0].filter.includes("reverse")}
            />
          </div>
          <div style={{ width: "100%", background: "var(--primary-light)" }}>
            <div className={styles.container}>
              <FeaturedBenefit
                block={landingFeaturedBenefit2[0].block}
                alternate={landingFeaturedBenefit2[0].filter.includes(
                  "reverse"
                )}
              />
            </div>
          </div>
          <div className={styles.container}>
            <FeaturedBenefit
              block={landingFeaturedBenefit3[0].block}
              alternate={landingFeaturedBenefit3[0].filter.includes("reverse")}
            />
          </div>
          <div style={{ width: "100%", background: "var(--secondary-light)" }}>
            <div className={styles.container}>
              <RiskCta block={landingCtaRisk[0].block} />
            </div>
          </div>
        </Section>
        <Section>
          <div
            className={styles.container}
            style={{ textAlign: "center", padding: "3em 0" }}
          >
            <PricesHeading block={pricesHeading.block} />
          </div>
          <div className={styles.container}>
            <Pricing
              // we know the array always has 3 prices in it
              // so if we sort it by the price, then the middle value
              data={restPricing.sort((a, b) => (a.title > b.title ? 1 : -1))}
              // at index: 1 is the featured price value.
              render={(pricing, i) => (
                <PricingCard
                  key={`${pricing.id}-${i}`}
                  pricing={pricing}
                  isFeatured={i === 1}
                />
              )}
            />
          </div>
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
