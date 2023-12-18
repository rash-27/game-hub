import {
  Box,
  Button,
  ChakraProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/usePlatforms";

interface Props{

    onSelectPlatform : (platform : Platform)=>void;
    selectedPlatform : Platform | null ;
}

const PlatformSelector = ({onSelectPlatform ,selectedPlatform }:Props) => {

    const {data ,error} = usePlatforms(); 

    if(error) return null;
  return (
    <ChakraProvider>
      <Box ml="10">
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || 'Platforms'}
          </MenuButton>
          <MenuList>
            {data.map((platform)=><MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}> {platform.name} </MenuItem>)}
          </MenuList>
        </Menu>
      </Box>
    </ChakraProvider>
  );
};

export default PlatformSelector;
