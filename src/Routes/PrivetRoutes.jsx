import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { FadeLoader } from "react-spinners";


const PrivetRoutes = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const location = useLocation();


    if (loding) {
        return <FadeLoader color="#36d7b7" />
    }

    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}}></Navigate>;
};

export default PrivetRoutes;