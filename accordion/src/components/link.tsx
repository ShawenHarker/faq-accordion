import { colors } from "../themes";

interface Links {
    href: string
    name: string
}

export default function Link({ href, name}: Links) {
    return (
      <a
        rel="noreferrer"
        href={href}
        target="_blank"
        style={{ color: colors.link, textDecoration: "none" }}
      >
        {name}
      </a>
    );
}