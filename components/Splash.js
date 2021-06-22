import { Container, Wrapper, Row } from "./Containers";
import { Hero } from "./Hero";
import { List } from "./List";
import { Cta } from "./Cta";

const components = {
  list: List,
  cta: Cta,
};

export const Splash = ({ data }) => {
  if (!Array.isArray(data)) return null;
  const [hero, ...restComponents] = data;
  return (
    <Wrapper>
      <Container>
        {hero && (
          <Hero
            key={hero?.block_id}
            data={{
              id: hero?.block_id,
              lead: hero?.block_lead,
              title: hero?.block_title,
              excerpt: hero?.block_excerpt,
              content: hero?.block_content,
              media: {
                id: hero?.media_id,
                title: hero?.media_title,
                alt: hero?.media_alt,
                url: hero?.media_url,
              },
            }}
            filter={hero?.fields?.filter}
          />
        )}
        <Row>
          {/* {restComponents.map((section) => {
            const Component = components[section?.fields?.type];

            if (section?.fields?.type.includes("list")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                  filter={section?.fields?.filter}
                />
              );
            }
            if (section?.fields?.type.includes("cta")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                  filter={section?.fields?.filter}
                />
              );
            }
            return null;
          })} */}
        </Row>
      </Container>
    </Wrapper>
  );
};
