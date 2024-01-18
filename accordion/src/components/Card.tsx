import { Card, Stack, Text } from "@chakra-ui/react";
import StarIcon from "./icons/Star";
import FaqAccordion from "./Accordion";
import { colors } from "../themes";
import useWindowSize from "../hooks/ScreenSIze";

const FaqCard = () => {
  const isMobile = useWindowSize();

  return (
    <Card
      sx={{
        maxWidth: isMobile ? "90%" : "650px",
        marginTop: isMobile ? "-30%" : "-10%",
        borderRadius: "16px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        px: isMobile ? "0.5em ":"2.5em",
        py: "1.5em",
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <StarIcon />
        <Text sx={{ fontSize: isMobile ? "36px" : "56px", fontWeight: "700", ml: ".5em", color: colors.darkPurple }}>FAQs</Text>
      </Stack>
      <FaqAccordion />
    </Card>
  );
};

export default FaqCard;
