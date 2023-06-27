import {createBrowserRouter} from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage.tsx";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const routes = createBrowserRouter([{
    path: "/", element: <Layout/>, errorElement: <ErrorPage/>, children: [
        {index: true, element: <HomePage/>},
        {path: "games/:id", element: <GameDetailsPage/>}
    ]
}]);

export default routes;