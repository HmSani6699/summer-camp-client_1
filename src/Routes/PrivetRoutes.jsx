import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Pages/Spinner/Spinner";


const PrivetRoutes = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();


    if (loding) {
        return <Spinner></Spinner>
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>;
};

export default PrivetRoutes;