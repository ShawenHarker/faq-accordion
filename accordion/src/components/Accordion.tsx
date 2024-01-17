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

const FaqAccordion = () => {
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
                  fontWeight="bold"
                  fontSize={"18px"}
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
