import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    const location=useLocation();
    console.log(location);
    const noHeaderAndFooter=location.pathname.includes('login')
    return (
        <div>
            {noHeaderAndFooter||<Navber></Navber>}
            <Outlet></Outlet>
            {noHeaderAndFooter||<Footer></Footer>}
        </div>
    );
};

export default Main;