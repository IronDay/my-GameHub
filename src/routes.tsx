import {createBrowserRouter} from "react-router-dom";
import GameDetailsPage from "./pages/GameDetailsPage.tsx";
import Layout from "./pages/Layout.tsx";
import HomePage from "./pages/HomePage.tsx";

const routes = createBrowserRouter([{
    path: "/", element: <Layout/>, children: [
        {index: true, element: <HomePage/>},
        {path: "games/:id", element: <GameDetailsPage/>}
    ]
}]);

export default routes;