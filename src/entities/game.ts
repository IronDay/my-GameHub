import { Platform } from "./Platform.ts";
import { Genre } from "./Genre.ts";

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
