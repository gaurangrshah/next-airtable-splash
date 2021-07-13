import { Container, Wrapper, Row } from "../Containers";
import { Hero } from "./Hero";
import { List } from "./List";
import { Cta } from "./Cta";
import { groupBy, Section } from "../../utils/data-helpers";

// components to be used for rendering Airtable data
const components = {
  list: List,
  cta: Cta,
};

export const Splash = ({ data }) => {
  if (!Array.isArray(data)) return null;

  // transform Airatble data
  const sections = data.map((section) => {
    return new Section(section); // create section from queried data
  });
  const [hero, ...rest] = sections;

  // group remaining sections if they have the same type
  const restSections = rest?.length ? groupBy(rest, "type") : rest;

  return (
    <Wrapper>
      <Container>
        {hero && (
          <Hero
            key={hero?.block?.id}
            data={hero?.block}
            filter={hero?.filter}
          />
        )}
        <Row>
          {Object.keys(restSections)?.map((key, i) => {
            const Component = components[key]; // component to use for rendering
            const section = restSections[key]; // section to be rendered
            return (
              <Component
                key={`section-${section[i]?.block?.id}`}
                data={section}
              />
            );
          })}
        </Row>
      </Container>
    </Wrapper>
  );
};
