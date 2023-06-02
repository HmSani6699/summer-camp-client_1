import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";


const PrivetRoutes = ({children}) => {
    const {user,loding}=useContext(AuthContext);

    if(loding){
        return <FadeLoader color="#36d7b7" />
    }

    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivetRoutes;