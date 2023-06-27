import {create} from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
    slug?: string
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
    setSlug: (slug: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {} as GameQuery,
    setSearchText: (searchText) => set(() => ({gameQuery: {searchText}})),
    setGenreId: (genreId) =>
        set((store) => ({gameQuery: {...store.gameQuery, genreId: genreId}})),
    setPlatformId: (platformId) =>
        set((store) => ({
            gameQuery: {...store.gameQuery, platformId: platformId},
        })),
    setSortOrder: (sortOrder) =>
        set((store) => ({
            gameQuery: {...store.gameQuery, sortOrder: sortOrder},
        })),
    setSlug: (slug: string) => set(() => ({gameQuery: {slug: slug}}))
}));

export default useGameQueryStore;
