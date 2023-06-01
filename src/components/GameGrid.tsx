import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import {GameCardSkeleton} from "./GameCardSkeleton.tsx";

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
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton + 1}/>)}
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
