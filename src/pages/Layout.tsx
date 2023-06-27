import {Outlet} from "react-router-dom"
import NavBar from "../components/NavBar.tsx";

const Layout = () => {
    return (
        <>
            <NavBar/>
            <div>
                <Outlet/>
            </div>
        </>
    )
}

export default Layout;