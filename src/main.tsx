import React from "react";
import ReactDOM from "react-dom/client";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {RouterProvider} from "react-router-dom";
import routes from "./routes";

import theme from "./theme.ts";

import "./index.css";

const queryClient = new QueryClient();
const REACT_VERSION = React.version;

console.log(REACT_VERSION);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={routes}/>
                <ReactQueryDevtools/>
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
);
