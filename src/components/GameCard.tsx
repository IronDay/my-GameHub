import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-util";
import Emojis from "./Emojis";
import { Game } from "../entities/Game.ts";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/games/${game.slug}`)}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack
          justifyContent="space-between"
          flexWrap={"wrap"}
          alignContent={"end"}
          marginBottom={3}
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <Emojis rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
}

export default GameCard;
