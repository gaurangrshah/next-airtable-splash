import { Button } from "../Button";

export function Hero({ block }) {
  return (
    <>
      <h1>{block?.title}</h1>
      <h3 style={{ width: "80%", margin: "0 auto" }}>{block?.excerpt}</h3>
      <div style={{ width: "100%", marginTop: "2em" }}>
        <Button
          href={block.links?.href}
          target={block.links?.isExternal ? "_blank" : "_self"}
        >
          {block?.links?.title}
        </Button>
      </div>
      <img
        src={block.media?.url[0]}
        alt={block.media?.alt}
        width='600px'
        style={{ margin: "6em 0" }}
      />
    </>
  );
}
