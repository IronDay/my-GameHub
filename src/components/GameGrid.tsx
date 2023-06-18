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
  const skeletons = [
    0, 10, 20, 30, 50, 60, 70, 80, 90, 40, 100, 200, 400, 500, 600, 990, 560,
    250, 360,
  ];

  if (error)
    return (
      <Text
        style={{
          minHeight: "100vh",
          color: "orangered",
          fontSize: "18px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {error.message}
      </Text>
    );

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      paddingX={10}
      paddingY={5}
    >
      {isLoading &&
        skeletons.map(() => (
          <GameCardContainer key={uuid()}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}

export default GameGrid;
