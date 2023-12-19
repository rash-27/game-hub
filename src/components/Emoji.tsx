import e1 from '../assets/e1.webp';
import e2 from '../assets/e2.webp';
import { Image, ImageProps } from '@chakra-ui/react';
interface Props{

    rating : number;
}

const Emoji = ({rating}:Props) => {

    const emojiMap: { [key : number]: ImageProps } = {
        4 : {src : e1 , alt : 'recommended'},
        5 : {src : e2 , alt : 'exceptional'}
    }
  return (
    <Image {...emojiMap[rating]} boxSize='25px' />
  )
}

export default Emoji
