import { Image } from "@chakra-ui/react";
import image from "../../assets/images/icon-minus.svg";
import useWindowSize from "../../hooks/ScreenSIze";

const MinusIcon = () => {
  const isMobile = useWindowSize();

  return (
    <Image
      src={image}
      alt="minus icon"
      width={isMobile ? 7 : 6}
      height={isMobile ? 7 : 6}
    />
  );
};

export default MinusIcon;
