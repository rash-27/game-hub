import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContsiner from "./GameCardContsiner";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardContsiner><GameCardSkeleton key={skeleton} /></GameCardContsiner>)}
        {games.map((game) => (
          <GameCardContsiner><GameCard key={game.id} game={game} /></GameCardContsiner>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
