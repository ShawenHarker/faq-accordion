import Anchor from "./components/link";

const Footer = () => {
  return (
    <div style={{ fontSize: "11px", textAlign: "center" }}>
      Challenge by{" "}
      <Anchor href="https://www.frontendmentor.io?ref=challenge" name="Frontend Mentor" />
      . Coded by{" "}
      <Anchor href="https://github.com/ShawenHarker" name="Shawen Harker" />.
    </div>
  );
};

export default Footer;