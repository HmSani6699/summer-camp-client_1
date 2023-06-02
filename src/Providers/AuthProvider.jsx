import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/Firebase";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);


    //----------------------//
    // creat a new user //
    //----------------------//
    const creatUser = (email, password) => {
        console.log(email,password);
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //--------------------//
    // Sign in user //
    //--------------------//
    const signInuser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //--------------------//
    // Log out user //
    //--------------------//
    const logOutUser = () => {
        setLoding(true)
        return signOut()
    }

    const authInfo = {
        user,
        loding,
        creatUser,
        signInuser,
        logOutUser
    }


    useEffect(() => {
          onAuthStateChanged(auth,(user)=>{
            setUser(user);
            console.log(user);
            setLoding(false)
          })
    }, [])




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;