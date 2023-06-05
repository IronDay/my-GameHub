import useData from "./useData.ts";
import { Genre } from "./useGenres.ts";
import { Platform } from "./usePlatforms.ts";

/* export interface Platform {
  id: number;
  name: string;
  slug: string;
} */

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
}

/*
interface FetchGamesResponse {
    count: number;
    results: Game[];
}
*/

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

/*const [games, setGames] = useState<Game[]>([]);
const [error, setError] = useState([]);
const [isLoading, setLoading] = useState(false);

useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => {
            setGames(res.data.results);
            setLoading(false);
        })
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false)
        });

    return () => controller.abort();
}, []);

return {games, setGames, error, setError, isLoading, setLoading};
};*/

export default useGames;
