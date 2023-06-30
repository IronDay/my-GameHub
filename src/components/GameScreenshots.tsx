import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number | string;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop={2}>
      {screenshots?.results.map((screenshot) => (
        <Box key={screenshot.id}>
          <Image src={screenshot.image} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
