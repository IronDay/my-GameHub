import {Platform} from "./usePlatforms.ts";
import {Genre} from "./useGenres.ts";

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