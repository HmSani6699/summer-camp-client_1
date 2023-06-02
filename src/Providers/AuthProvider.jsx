import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
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
    const logInUser = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    //--------------------//
       // Log out user //
    //--------------------//
    const updateUserProfule=(user,name,photo)=>{
        return updateProfile(user, {
            displayName: name, photoURL: photo
          })
    }

    //--------------------//
       // Log out user //
    //--------------------//
    const logOutUser = () => {
        setLoding(true)
        return signOut(auth)
    }

    const authInfo = {
        user,
        loding,
        creatUser,
        logInUser,
        updateUserProfule,
        logOutUser
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user);
            console.log(user);
            setLoding(false)
          })

          return ()=>{
            return unsubscribe()
          }
    }, [])




    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;