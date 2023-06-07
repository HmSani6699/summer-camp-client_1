import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Pages/Spinner/Spinner";
import useAuth from "../hooks/useAuth";


const PrivetRoutes = ({ children }) => {
    const { user, loding } = useAuth();
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