import NextLink from "next/link";

export const Link = ({ className, variant, href, config, children, ...rest }) => {
  return (
    <>
      <NextLink href={href} {...config}>
        <a className={["nextLink", variant, className].join(" ")} {...rest}>
          <>{children}</>
        </a>
      </NextLink>

      <style jsx>{`
        .primary {
          color: var(--dark);
          background: var(--primary);
        }

        .primary:hover {
          transition: 0.2 ease;
          background: var(--primary-light);
        }
      `}</style>
      <style jsx>{`
        .secondary {
          color: var(--dark);
          background: var(--secondary);
        }

        .secondary:hover {
          transition: 0.2 ease;
          background: var(--secondary-light);
        }
      `}</style>
      <style jsx>{`
        .accent {
          color: var(--dark);
          background: var(--accent);
        }

        .accent:hover {
          transition: 0.2 ease;
          background: var(--accent-light);
        }
      `}</style>
      <style jsx>{`
        .light {
          color: var(--dark);
          background: var(--light);
        }

        .light:hover {
          transition: 0.2 ease;
          background: var(--gray100);
        }
      `}</style>
      <style jsx>{`
        .dark {
          color: var(--light);
          background: var(--dark);
        }

        .dark:hover {
          transition: 0.2 ease;
          background: var(--gray200);
        }
      `}</style>
    </>
  );
};
