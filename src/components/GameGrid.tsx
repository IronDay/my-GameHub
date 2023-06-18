import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { v4 as uuid } from "uuid";
import { GameQuery } from "../App.tsx";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { error, data, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);
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

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingX={10}
        spacing={6}
        paddingY={6}
      >
        {isLoading &&
          skeletons.map(() => (
            <GameCardContainer key={uuid()}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
