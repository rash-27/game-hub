import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"


interface Props{
  onSearch : (searchText:string)=> void;
}

const Navbar = ({onSearch}:Props) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='50px' borderRadius='10px' />
        <SearchInput  onnSearch={onSearch} />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar