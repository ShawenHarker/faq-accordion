import Link from "./components/link";

export const Footer = () => {
  return (
    <div style={{ fontSize: "11px", textAlign: "center" }}>
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge" name="Frontend Mentor" />
      . Coded by{" "}
      <Link href="https://github.com/ShawenHarker" name="Shawen Harker" />.
    </div>
  );
};
