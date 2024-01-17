import { Link } from "@chakra-ui/react";
import { colors } from "../themes";

interface Links {
  href: string;
  name: string;
}

export default function Anchor({ href, name }: Readonly<Links>) {
  return (
    <Link
      rel="noreferrer"
      href={href}
      target="_blank"
      style={{ color: colors.link, textDecoration: "none" }}
    >
      {name}
    </Link>
  );
}
