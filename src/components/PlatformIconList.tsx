import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [Key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    mac: FaApple,
    web: BsGlobe,
    linux: FaLinux,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          key={platform.id}
          color={"gray.500"}
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
