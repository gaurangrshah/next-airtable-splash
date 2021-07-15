import { Row } from "../Containers";
import { Button } from '../Button';

export const RiskCta = ({block}) => {
  return (
    <Row style={{ justifyContent: "center", padding: "1em 2em" }}>
      <div style={{ margin: "0 2em" }}>
        <img
          src={block.media.url[0]}
          alt={block.media.alt}
          height='80px'
        />
      </div>
      <div>
        <h4>{block.title}</h4>
        <p>{block.excerpt}</p>
      </div>
      <div style={{ margin: "0 2em" }}>
        <Button style={{ height: "3.2em", padding: "0 0.25em" }}>
          {block.links.title}
        </Button>
      </div>
    </Row>
  );
};
