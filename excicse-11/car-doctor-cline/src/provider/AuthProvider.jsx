import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firabase";

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const creatUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (email) =>{
        setLoader(true)
        return sendPasswordResetEmail(auth, email)
    }

    const SingOutUser = () =>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unsubcribe()
        }
    },[])

    const authInfo = { user,loader, creatUser,logInUser, resetPassword, SingOutUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;