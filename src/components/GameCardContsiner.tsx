import { Box, ChakraProvider } from "@chakra-ui/react"
import { ReactNode } from "react";

interface Props{
    children : ReactNode;
}

const GameCardContsiner = ({children}:Props) => {
  return (
    <ChakraProvider>
    <Box  borderRadius={10} overflow='hidden'>
        {children}
    </Box>
    </ChakraProvider>
  )
}

export default GameCardContsiner ;