import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttribute from "../components/GameAttribute.tsx";
import useGame from "../hooks/useGame.ts";
import useTrailer from "../hooks/useTrailers.ts";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

const GameDetailsPage = () => {
  const maxChars = 300;
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner display={"flex"} justifyContent={"center"} />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText maxChars={maxChars}>
        {game.description_raw}
      </ExpandableText>
      <GameAttribute game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailsPage;
