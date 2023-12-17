import { Platform } from "../hooks/useGames";
import {IconType} from 'react-icons'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaAndroid,
  FaLinux,
} from "react-icons/fa";
import {MdPhoneIphone} from 'react-icons/md';
import {SiNintendo} from 'react-icons/si';
import {BsGlobe} from 'react-icons/bs';

import { HStack, Icon } from "@chakra-ui/react";
interface Props {
  platforms: Platform[];
}

const PlatformiconList = ({ platforms }: Props) => {
    const iconMap:{ [key: string] : IconType } ={
        //name : PlayStation
        //slug : playstation
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        ios : MdPhoneIphone,
        web : BsGlobe,
        android : FaAndroid
    }
  return (
    <HStack marginY={2}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformiconList;
