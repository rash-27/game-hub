import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props{
    onnSearch : (searchText : string )=>void ;
}

const SearchInput = ({onnSearch}:Props) => {
    const ref = useRef<HTMLInputElement>(null);
  return (
    <form onSubmit={(event)=>{
        event.preventDefault();
        if(ref.current) onnSearch(ref.current.value);
    }}>
    <InputGroup >
    <InputLeftElement children={<BsSearch />} />
    <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' ></Input>
    </InputGroup>
    </form>
  )
}

export default SearchInput
