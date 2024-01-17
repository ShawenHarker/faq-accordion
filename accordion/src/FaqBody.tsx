import { Image, Stack } from "@chakra-ui/react";
import Footer from "./Footer";
import { colors } from "./themes";
import Desktop from "./assets/images/background-pattern-desktop.svg"; 

const FaqBody = () => {
  return (
    <Stack style={{ backgroundColor: colors.lightPink, height: "100vh" }}>
      <Image src={ Desktop } alt="desktop background image"/>
      <Footer />
    </Stack>
  );
};

export default FaqBody;