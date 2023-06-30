import { Box } from "@chakra-ui/react";
import useTrailer from "../hooks/useTrailers";

interface Props {
  gameId: number | string;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = trailers?.results[0];

  return (
    first && (
      <Box>
        <video
          controls
          poster={trailers?.results[0]?.preview}
          src={trailers?.results[0]?.data[480]}
        />
      </Box>
    )
  );
};

export default GameTrailer;
