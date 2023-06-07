import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { v4 as uuid } from "uuid";
import { GameQuery } from "../App.tsx";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { error, data, isLoading } = useGames(gameQuery);

  /*const skeletons = Array.from({length: games.length}, () => (0));*/

  const skeletons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        paddingX={10}
        paddingY={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={uuid()}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={uuid()}>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
