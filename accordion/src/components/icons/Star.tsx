import { Image } from "@chakra-ui/react";
import image from "../../assets/images/icon-star.svg";

const StarIcon = () => {
    return (
        <Image src={image} alt="star icon" width={10} height={10}/>
    );
}

export default StarIcon;