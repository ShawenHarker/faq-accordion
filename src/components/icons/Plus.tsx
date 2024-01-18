import { Image } from "@chakra-ui/react";
import image from "../../assets/images/icon-plus.svg"
import useWindowSize from "../../hooks/ScreenSIze";

const PlusIcon = () => {
  const isMobile = useWindowSize();

  return (
    <Image
      src={image}
      alt="plus icon"
      width={isMobile ? 7 : 6}
      height={isMobile ? 7 : 6}
    />
  );
};

export default PlusIcon;
