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

const PlatformSelector = () => {

    const {data ,error} = usePlatforms(); 

    if(error) return null;
  return (
    <ChakraProvider>
      <Box ml="10">
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform)=><MenuItem key={platform.id}> {platform.name} </MenuItem>)}
          </MenuList>
        </Menu>
      </Box>
    </ChakraProvider>
  );
};

export default PlatformSelector;
