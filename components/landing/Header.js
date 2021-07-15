import { Button } from "../Button";

export function HeaderContent({ brandName }) {
  return (
    <>
      <a href='/'>
        <img src='/logo-holder.svg' width='32px' height='32px' />
        <h3>{brandName.toUpperCase()}</h3>
      </a>
      <nav aria-label='primary'>
        <Button>CLICK HERE</Button>
      </nav>
    </>
  );
}
