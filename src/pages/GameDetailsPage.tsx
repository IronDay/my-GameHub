import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";

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
    </>
  );
};

export default GameDetailsPage;
