import { Link } from "../Link";
import { Row } from "../Containers";
import { SectionHeading } from "./SectionHeading";

export const UrgencyCta = ({ block }) => {
  return (
    <Row
      className='imgHolder'
      style={{
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <img src={block.media.url[0]} alt={block.media.alt} width='300px' />
      <SectionHeading
        title={block.title}
        excerpt={block.excerpt}
        align='center'
      />
      <Link className='button accent' href={block.links.href}>
        {block.links.title}
      </Link>
    </Row>
  );
};
