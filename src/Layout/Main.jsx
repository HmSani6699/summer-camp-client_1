import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Pages/Shared/Navber/Navber";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    const location=useLocation();
    console.log(location);
    const noHeaderAndFooterLogin=location.pathname.includes('login')
    const noHeaderAndFooterRegister=location.pathname.includes('register')
    return (
        <div>
            {(noHeaderAndFooterLogin||noHeaderAndFooterRegister)||<Navber></Navber>}
            <Outlet></Outlet>
            {(noHeaderAndFooterLogin||noHeaderAndFooterRegister)||<Footer></Footer>}
        </div>
    );
};

export default Main;