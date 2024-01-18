import { Stack } from "@chakra-ui/react";
import Footer from "./Footer";
import { colors } from "./themes";
import MobileImage from "./components/img/Mobile";
import DesktopImage from "./components/img/Desktop";
import FaqCard from "./components/Card";
import useWindowSize from "./hooks/ScreenSIze";

const FaqBody = () => {
  const isMobile = useWindowSize();

  return (
    <Stack
      style={{
        backgroundColor: colors.lightPink,
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {isMobile ? <MobileImage /> : <DesktopImage />}
      <FaqCard />
      <Footer />
    </Stack>
  );
};

export default FaqBody;
