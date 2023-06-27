import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponse} from "../services/api-client.ts";
import {Genre} from "./useGenres.ts";
import {Platform} from "./usePlatforms.ts";
import ms from "ms";
import useGameQueryStore from "../store.ts";

const apiClient = new ApiClient<Game>("/games");

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    slug: string;
    description_raw: string;
    genres: Genre[];
    rating_top: number;
    rating: number;
}

const useGames = () => {
    const gameQuery = useGameQueryStore((story) => story.gameQuery);
    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam = 1}) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    parent_platforms: gameQuery.platformId,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    slug: gameQuery.slug,
                    page: pageParam,
                },
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: ms("24h"), //24h
    });
};

export default useGames;
