import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform: { id, name } }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metasore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttribute;
