import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true)

    const authInfo = {
        user,
        loding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;