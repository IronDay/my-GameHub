import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App.tsx";
import apiClient, { FetchResponse } from "../services/api-client.ts";
import { Genre } from "./useGenres.ts";
import { Platform } from "./usePlatforms.ts";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
  rating: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 5 * 60 * 1000, //5min
  });

export default useGames;
