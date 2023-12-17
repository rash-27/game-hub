import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';


const GameCardSkeleton = () => {
  return (
    <Card >
      <Skeleton width={{ base: "100%", md: `calc(100% / 2)`, lg: '300px' , xl :'200px' }} height={{ base: "300px", md: "200px", lg: "200px" , xl:'150px'}} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}

export default GameCardSkeleton ;
