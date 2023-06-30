import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client.ts";

import { Trailer } from "../entities/Trailer.ts";

const useTrailer = (gameId: string | number) => {
  const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailer", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailer;
