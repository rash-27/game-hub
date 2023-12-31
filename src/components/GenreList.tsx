import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props{
    onSelectGenre : (genre:Genre)=>void;
    selectedGenre : Genre |null;
}


const GenreList = ({onSelectGenre ,selectedGenre }:Props) => {
  const { data} = useGenres();
  // if(error) return null;
  // if(isLoading) return <Spinner />;
  return (
    <div>
      <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY='8px'>
            <HStack>
              <Image
                objectFit={'cover'}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button onClick={()=>onSelectGenre(genre)}  whiteSpace='normal' textAlign={"left"} fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}   variant='link' fontSize='lg'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
