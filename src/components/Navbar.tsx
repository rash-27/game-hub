import { HStack, Image } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding='10px'>
        <Image src={logo} boxSize='50px' borderRadius='full' />
        <ColorModeSwitch />
    </HStack>
  )
}

export default Navbar