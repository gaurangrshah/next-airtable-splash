import { Container, Wrapper, Row } from "./Containers";
import { Hero } from "./Hero";
import { List } from "./List";
import { Cta } from "./Cta";

const flexComponents = {
  list: List,
  cta: Cta,
};

export const Splash = ({ data }) => {
  const [hero, ...restComponents] = data;

  return (
    <Wrapper>
      <Container>
        {hero && <Hero key={hero?.id} data={hero.blocks} />}
        <Row>
          {restComponents.map((section) => {
            const Component = flexComponents[section?.fields?.type];

            if (section?.fields?.type.includes("list")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                />
              );
            }
            if (section?.fields?.type.includes("cta")) {
              return (
                <Component
                  key={`${section?.id}-${section?.order}`}
                  data={section?.blocks}
                />
              );
            }
          })}
        </Row>
      </Container>
    </Wrapper>
  );
};
