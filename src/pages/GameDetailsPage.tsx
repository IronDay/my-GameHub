import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import { Text, Heading, Spinner, SimpleGrid } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import DefinitionItem from "../components/DefinitionItem.tsx";
import CriticScore from "../components/CriticScore.tsx";
import GameAttribute from "../components/GameAttribute.tsx";

const GameDetailsPage = () => {
  const maxChars = 300;
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText maxChars={maxChars}>
        {game.description_raw}
      </ExpandableText>
      <GameAttribute game={game} />
    </>
  );
};

export default GameDetailsPage;
