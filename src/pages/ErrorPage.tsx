import {Box, Heading, Text} from "@chakra-ui/react";
import {useRouteError, isRouteErrorResponse} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Heading>Oops</Heading>
                <Text>
                    {isRouteErrorResponse(error) ? 'This page does not exist' : 'An unexpected error occurred'}
                </Text>
            </Box>
        </>
    )
}

export default ErrorPage;