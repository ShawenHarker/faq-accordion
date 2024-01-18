import { Image } from "@chakra-ui/react";
import image from "../../assets/images/icon-star.svg";
import useWindowSize from "../../hooks/ScreenSIze";

const StarIcon = () => {
    const isMobile = useWindowSize();

    return (
      <Image
        src={image}
        alt="star icon"
        width={isMobile ? 7 : 10}
        height={isMobile ? 7 : 10}
      />
    );
}

export default StarIcon;