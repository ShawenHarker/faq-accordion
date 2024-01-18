import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  Box,
} from "@chakra-ui/react";
import Data from "../data/faq.json";
import { colors } from "../themes";
import MinusIcon from "./icons/Minus";
import PlusIcon from "./icons/Plus";
import useWindowSize from "../hooks/ScreenSIze";

const FaqAccordion = () => {
  const isMobile = useWindowSize();

  return (
    <Accordion allowToggle allowMultiple>
      {Data.map((data) => (
        <AccordionItem key={data.id} pt={5} sx={{ border: "none" }}>
          {({ isExpanded }) => (
            <>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  fontWeight="700"
                  fontSize={isMobile ? "16px" : "18px"}
                  textAlign="left"
                  color={colors.darkPurple}
                >
                  {data.question}
                </Box>
                {isExpanded ? <MinusIcon /> : <PlusIcon />}
              </AccordionButton>
              <AccordionPanel>
                <Text color={colors.grayishPurple}>{data.answer}</Text>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqAccordion;
