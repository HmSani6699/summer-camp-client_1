import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
console.log(auth);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);


    //----------------------//
    // creat a new user //
    //----------------------//
    const creatUser = (email, password) => {
        console.log(email, password);
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
    const updateUserProfule = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name, photoURL: photo
        })
    }


    //--------------------//
    // GOOGLE LOG IN USER //
    //--------------------//
    const googlePrivder = new GoogleAuthProvider()
    const googleLogin = () => {
        return signInWithPopup(auth, googlePrivder)
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
        googleLogin,
        logOutUser
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            
            if (currentUser?.email) {
                axios.post('https://bistro-server-hmsani6699.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data);
                        localStorage.setItem('access-token',data.data.token);
                        setLoding(false)
                    })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoding(false)
            
        })

        return () => {
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