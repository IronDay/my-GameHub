import {
    Button,
    HStack,
    Heading,
    Image,
    List,
    ListItem,
    Spinner, Box,
} from "@chakra-ui/react";
import useGenres, {Genre} from "../hooks/useGenres.ts";
import getCroppedImageUrl from "../services/image-util.ts";

interface Props {
    onSelectedGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({onSelectedGenre, selectedGenreId}: Props) => {
    const {data, isLoading, error} = useGenres();

    if (error) {
        console.log(error);
        return null;
    }
    if (isLoading) return <Box display={"flex"} justifyContent={"center"}><Spinner/></Box>;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                objectFit="cover"
                                boxSize="32px"
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Button
                                whiteSpace="normal"
                                textAlign="left"
                                onClick={() => onSelectedGenre(genre)}
                                fontSize="lg"
                                variant={"link"}
                                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
