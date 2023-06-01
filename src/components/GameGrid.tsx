import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton.tsx";
import {GameCardContainer} from "./GameCardContainer.tsx";

function GameGrid() {
    const {error, games, isLoading} = useGames();
    /*const skeletons = Array.from({length: games.length}, () => (0));*/

    const skeletons = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 5}}
                spacing={10}
                padding={10}
            >
                {isLoading && skeletons.map(skeleton => <GameCardContainer><GameCardSkeleton
                    key={skeleton + 1}/></GameCardContainer>)}
                {games.map((game) => (
                    <GameCardContainer><GameCard key={game.id} game={game}/></GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
