import { Stack } from "@chakra-ui/react";
import Footer from "./Footer";
import { colors } from "./themes";
import DesktopImage from "./components/img/Desktop";
import FaqCard from "./components/Card";

const FaqBody = () => {
  return (
    <Stack
      style={{
        backgroundColor: colors.lightPink,
        height: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <DesktopImage />
      <FaqCard />
      <Footer />
    </Stack>
  );
};

export default FaqBody;
